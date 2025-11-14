import { NextRequest, NextResponse } from "next/server";
import { google } from "googleapis";

export async function POST(req: NextRequest) {
  try {
    const { firstname, lastname, state, code, phone } = await req.json();
    const processedKey = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n") || "";
    console.log("Private key length:", processedKey.length);
   
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
        
      },
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });
   

    const sheets = google.sheets({ version: "v4", auth });
    const spreadsheetId = process.env.GOOGLE_SHEET_ID;

    
    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: "KK Registration!A2:C", 
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [[firstname, lastname, state, `'${code} ${phone}`]],
      },
    });

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("Error adding data to Google Sheets:", error);
    return NextResponse.error();
  }
}
