"use server";

export type ContactFormState = {
  success: boolean;
};

export async function submitToGHL(
  _previousState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const phone = String(formData.get("phone") ?? "").trim();
  const goal = String(formData.get("business") ?? "").trim();

  if (!name || !email || !phone) return { success: false };

  const apiKey = process.env.GHL_API_KEY;
  const locationId = process.env.GHL_LOCATION_ID;
  if (!apiKey || !locationId) {
    console.error("GHL credentials are not configured.");
    return { success: false };
  }

  const [firstName, ...lastNames] = name.split(/\s+/);
  const payload: Record<string, unknown> = {
    locationId,
    firstName,
    name,
    email,
    phone,
    source: "Landing Page Form",
    tags: ["digital marketing, Google Ads"],
  };

  const lastName = lastNames.join(" ");
  if (lastName) payload.lastName = lastName;
  if (goal) payload.customFields = [{ key: "message", field_value: goal }];

  try {
    const response = await fetch(
      "https://services.leadconnectorhq.com/contacts/upsert",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          Version: "2021-07-28",
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
        cache: "no-store",
      },
    );

    if (!response.ok) {
      console.error("GHL contact submission failed with status:", response.status);
      return { success: false };
    }

    return { success: true };
  } catch (error) {
    console.error("GHL contact submission failed:", error);
    return { success: false };
  }
}
