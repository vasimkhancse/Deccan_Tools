export const API_URL = "https://email-service-cfhd.onrender.com";


export async function sendEnquiryEmail(payload) {
  try {
    const response = await fetch(`${API_URL}/api/enquiry`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: payload.name || "Not provided",
        phone: payload.phone || "Not provided",
        email: payload.email || "Not provided",
        company: payload.company || "Not provided",
        message: payload.message || payload.notes || "No message provided",
        subject:
          payload.subject ||
          `New Tooling Enquiry from ${payload.name || "Website Visitor"}`,
        id:"1"
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      return {
        success: false,
        message: data.message || "Failed to send enquiry",
      };
    }

    return {
      success: true,
      provider: "nodejs",
      data,
    };
  } catch (error) {
    console.error("Email API error:", error);

    return {
      success: false,
      message: "Unable to connect to email server",
    };
  }
}