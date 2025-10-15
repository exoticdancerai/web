import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendWaitlistEmail(name: string, email: string) {
  try {
    const { data, error } = await resend.emails.send({
      from: 'NAT250 Waitlist <onboarding@resend.dev>',
      to: ['anthem250th@gmail.com'],
      subject: 'New Waitlist Signup - NAT250',
      html: `
        <h2>New Waitlist Signup</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Submitted:</strong> ${new Date().toLocaleString()}</p>
      `,
      text: `New waitlist signup received:\n\nName: ${name}\nEmail: ${email}\n\nSubmitted on: ${new Date().toLocaleString()}`
    });

    if (error) {
      console.error('Resend error:', error);
      throw new Error(error.message);
    }

    console.log('Email sent successfully:', data);
    return data;
  } catch (error) {
    console.error('Failed to send email:', error);
    throw error;
  }
}
