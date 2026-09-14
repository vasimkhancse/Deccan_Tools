

export const WEB3FORMS_ACCESS_KEY = '8797feb1-8b17-4c51-bd0f-02f7f48f6e90'
export const RECIPIENT_EMAIL = 'vasimkhancse@gmail.com';

export async function sendEnquiryEmail(payload) {
  const templateParams = {
    to_email: RECIPIENT_EMAIL,
    name: payload.name || 'Not provided',
    phone: payload.phone || 'Not provided',
    email: payload.email || 'Not provided',
    company: payload.company || 'Not provided',
    message: payload.message || payload.notes || 'No message provided',
    subject: payload.subject || `New Tooling Enquiry from ${payload.name || 'Website Visitor'}`,
    submission_time: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })
  };

  if (WEB3FORMS_ACCESS_KEY) {
    try {
      const web3Res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          name: templateParams.name,
          email: templateParams.email,
          phone: templateParams.phone,
          company: templateParams.company,
          message: templateParams.message,
          subject: templateParams.subject,
          from_name: 'Deccan Toolings'
        })
      });
      if (web3Res.ok) {
        const web3Data = await web3Res.json();
        return { success: true, provider: 'web3forms', data: web3Data };
      }
    } catch (web3Err) {
      console.warn('Web3Forms attempt failed:', web3Err);
    }
  }

 

  return { success: true, fallback: true };
}
