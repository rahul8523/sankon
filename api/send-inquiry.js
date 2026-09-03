import nodemailer from "nodemailer";

const MAX_FIELD_LENGTH = 5000;

function clean(value) {
  return String(value ?? "").trim().slice(0, MAX_FIELD_LENGTH);
}

function escapeHtml(value) {
  return clean(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export default async function handler(request, response) {
  if (request.method !== "POST") {
    response.setHeader("Allow", "POST");
    return response.status(405).json({ message: "Method not allowed." });
  }

  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;
  const recipient = process.env.CONTACT_TO_EMAIL || smtpUser;
  const bccRecipient = process.env.CONTACT_BCC_EMAIL;

  if (!smtpUser || !smtpPass || !recipient) {
    console.error("SMTP environment variables are not configured.");
    return response.status(500).json({ message: "Email service is not configured." });
  }

  const payload = request.body || {};

  // Honeypot field: silently accept bot submissions without sending mail.
  if (clean(payload.website)) {
    return response.status(200).json({ message: "Message sent successfully." });
  }

  const name = clean(payload.name);
  const email = clean(payload.email);
  const phone = clean(payload.phone);
  const formType = clean(payload.formType) || "Website inquiry";

  if (!name || !email || !email.includes("@")) {
    return response.status(400).json({ message: "Please provide a valid name and email address." });
  }

  if (!/^\d{10}$/.test(phone)) {
    return response.status(400).json({ message: "Please provide a valid 10-digit phone number." });
  }

  const details = {
    "Form Type": formType,
    Name: name,
    Company: clean(payload.company),
    Email: email,
    Phone: phone,
    Product: clean(payload.product),
    "Inquiry Type": clean(payload.inquiryType),
    "Category / Equipment": clean(payload.category),
    Message: clean(payload.message),
  };

  const detailRows = Object.entries(details)
    .filter(([, value]) => value)
    .map(
      ([label, value]) =>
        `<tr><td style="padding:8px;border:1px solid #ddd;font-weight:600;vertical-align:top">${escapeHtml(label)}</td><td style="padding:8px;border:1px solid #ddd;white-space:pre-wrap">${escapeHtml(value)}</td></tr>`,
    )
    .join("");

  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: { user: smtpUser, pass: smtpPass },
    });

    await transporter.sendMail({
      from: `Sankon Website <${smtpUser}>`,
      to: recipient,
      ...(bccRecipient ? { bcc: bccRecipient } : {}),
      replyTo: email,
      subject: `[${formType}] Inquiry from ${name}`,
      text: Object.entries(details)
        .filter(([, value]) => value)
        .map(([label, value]) => `${label}: ${value}`)
        .join("\n\n"),
      html: `<h2>New website inquiry</h2><table style="border-collapse:collapse;width:100%;max-width:720px">${detailRows}</table>`,
    });

    return response.status(200).json({ message: "Message sent successfully." });
  } catch (error) {
    console.error("SMTP send failed:", error instanceof Error ? error.message : error);
    return response.status(500).json({ message: "Message could not be sent. Please try again." });
  }
}
