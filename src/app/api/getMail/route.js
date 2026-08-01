import { existsSync, readFileSync } from "fs";
import { dirname, join } from "path";
import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

function findEnvFile(startDir) {
  let currentDir = startDir;

  while (true) {
    const candidate = join(currentDir, ".env.local");
    if (existsSync(candidate)) return candidate;

    const parentDir = dirname(currentDir);
    if (parentDir === currentDir) break;
    currentDir = parentDir;
  }

  return null;
}

function getResendApiKey() {
  const fromProcess = process.env.RESEND_API_KEY?.trim();
  if (fromProcess) return fromProcess;

  try {
    const envPath = findEnvFile(process.cwd());
    if (!envPath) return "";

    const envFile = readFileSync(envPath, "utf8").replace(/^\uFEFF/, "");
    const match = envFile.match(/^[ \t]*RESEND_API_KEY[ \t]*=[ \t]*(.+)$/m);
    if (match) {
      return match[1].trim().replace(/^['"]|['"]$/g, "");
    }
  } catch {
    // Ignore missing env file and fall back to the empty string.
  }

  return "";
}

const resendApiKey = getResendApiKey();
const resend = resendApiKey ? new Resend(resendApiKey) : null;
const toEmail = process.env.RESEND_TO_EMAIL?.trim() || "junadiakamo@gmail.com";
const fromEmail = process.env.RESEND_FROM_EMAIL?.trim() || "Your App <onboarding@resend.dev>";

export async function POST(request) {
  console.log("API route hit", resendApiKey ? `key present (${resendApiKey.length})` : "key missing");

  try {
    const body = await request.json();
    const {
      name,
      middleName,
      surName,
      gender,
      dob,
      address,
      apartment,
      city,
      province,
      zipCode,
      yearsAtCurrent,
      education,
      status,
      employement,
      grantRecieved,
      income,
      debt,
      phone,
      email,
      grantAmount,
      paymentType,
    } = body;

    if (!resend) {
      return NextResponse.json(
        { message: "Missing or invalid RESEND_API_KEY in environment variables. Restart the dev server after adding it." },
        { status: 500 }
      );
    }

    const data = await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      replyTo: email,
      subject: "new grant application",
      html: `
        <h2>New Grant Application</h2>

        <table border="1" cellpadding="8" cellspacing="0">
          <tr><td><strong>First Name</strong></td><td>${name}</td></tr>
          <tr><td><strong>Middle Name</strong></td><td>${middleName}</td></tr>
          <tr><td><strong>Surname</strong></td><td>${surName}</td></tr>
          <tr><td><strong>Gender</strong></td><td>${gender}</td></tr>
          <tr><td><strong>Date of Birth</strong></td><td>${dob}</td></tr>
          <tr><td><strong>Address</strong></td><td>${address}</td></tr>
          <tr><td><strong>Apartment</strong></td><td>${apartment}</td></tr>
          <tr><td><strong>City</strong></td><td>${city}</td></tr>
          <tr><td><strong>Province</strong></td><td>${province}</td></tr>
          <tr><td><strong>Zip Code</strong></td><td>${zipCode}</td></tr>
          <tr><td><strong>Years at Current Address</strong></td><td>${yearsAtCurrent}</td></tr>
          <tr><td><strong>Education</strong></td><td>${education}</td></tr>
          <tr><td><strong>Marital Status</strong></td><td>${status}</td></tr>
          <tr><td><strong>Employment Status</strong></td><td>${employement}</td></tr>
          <tr><td><strong>Grant Received</strong></td><td>${grantRecieved}</td></tr>
          <tr><td><strong>Income</strong></td><td>${income}</td></tr>
          <tr><td><strong>Debt</strong></td><td>${debt}</td></tr>
          <tr><td><strong>Phone</strong></td><td>${phone}</td></tr>
          <tr><td><strong>Email</strong></td><td>${email}</td></tr>
          <tr><td><strong>Grant Amount</strong></td><td>${grantAmount}</td></tr>
          <tr><td><strong>Payment Type</strong></td><td>${paymentType}</td></tr>
        </table>
      `,
    });

    return NextResponse.json({ message: "successful", data }, { status: 200 });
  } catch (error) {
    console.error("Email send failed", error);
    const message = error?.message || "Unknown error";
    const status = error?.statusCode || 500;
    return NextResponse.json({ message, status }, { status });
  }
}