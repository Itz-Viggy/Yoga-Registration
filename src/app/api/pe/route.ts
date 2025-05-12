import { NextRequest, NextResponse } from "next/server";
import { google } from "googleapis";

export async function POST(req: NextRequest) {
  try {
    const { firstname, lastname, state, gender, code, phone } = await req.json();
    // Normalize private key
    const processedKey = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n") || "";
    console.log("Private key length:", processedKey.length);

    // Authenticate
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: processedKey,
      },
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({ version: "v4", auth });
    const spreadsheetId = process.env.GOOGLE_SHEET_ID;

    // Append PE form data (A–F)
    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: "PE Registration!A2:E",
      valueInputOption: "RAW",
      requestBody: {
        values: [[firstname, lastname, state, gender, `${code} ${phone}`]],
      },
    });

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("Error adding PE data to Google Sheets:", error);
    return NextResponse.error();
  }
}
