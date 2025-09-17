import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendBookingConfirmationEmail({
  to,
  providerName,
  startTime,
  sessionId,
}: {
  to: string;
  providerName: string;
  startTime: string;
  sessionId: string;
}) {
  const subject = 'Your Mind Moment Booking Confirmation';
  const text = `Thank you for booking a session on Mind Moment.\n\nProvider: ${providerName}\nTime: ${startTime}\n\nIf you have any questions, reply to this email.\n\nThis is a wellness conversation, not a crisis or medical service.`;

  return resend.emails.send({
    from: 'Mind Moment <noreply@mindmoment.ca>',
    to,
    subject,
    text,
  });
}
