import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
export async function POST(request: Request) {
  const body = await request.json();
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL, // Your Gmail address
        pass: process.env.APP_PASS, // Your app password from Google
      },
    });
    // Email options
    const mailOptions = {
      from: process.env.EMAIL, // Sender's email
      to: process.env.EMAIL, // Recipient's email
      subject: "Message from portfolio", // Subject line
      html: `<div>
            <div>Name: ${body.name} </div>
              <div>Email: ${body.email} </div>
              <div>Query: ${body.query} </div>
        </div>`, // HTML body (optional)
    };
    console.log("body", body);
    const response = await transporter.sendMail(mailOptions);
    console.log("response", response.accepted);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.log("error", error);
    return NextResponse.json({ success: false });
  }
}
