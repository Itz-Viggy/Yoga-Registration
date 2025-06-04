

import { NextRequest, NextResponse } from "next/server";
import { google } from "googleapis";

export async function POST(req: NextRequest) {
  try {
    // 1. Parse the incoming feedback fields
    const { name, likedBest, improvements, rating, suggestions } = await req.json();

    // 2. Authenticate using your service account credentials
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY!.replace(/\\n/g, "\n"),
      },
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    // 3. Initialize the Sheets client
    const sheets = google.sheets({ version: "v4", auth });
    const spreadsheetId = process.env.GOOGLE_SHEET_ID!;

    // 4. Append the feedback data to your "Feedback" sheet, columns A–E, starting at row 2
    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: "PE Feedback!A2:E",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [[name, likedBest, improvements, rating, suggestions]],
      },
    });

    // 5. Return success
    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("Error appending feedback to Google Sheets:", error);
    return NextResponse.error();
  }
}
