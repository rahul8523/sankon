export type InquiryPayload = {
  formType: string;
  name: string;
  company?: string;
  email: string;
  phone?: string;
  product?: string;
  inquiryType?: string;
  category?: string;
  message?: string;
  website?: string;
};

export async function submitInquiry(payload: InquiryPayload) {
  const response = await fetch("/api/send-inquiry", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  const result = (await response.json().catch(() => null)) as { message?: string } | null;

  if (!response.ok) {
    throw new Error(result?.message || "Message could not be sent. Please try again.");
  }

  return result?.message || "Message sent successfully.";
}
