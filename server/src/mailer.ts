import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import logger from './logger';

dotenv.config();

export type SchedulePayload = {
  name: string;
  email: string;
  phone?: string;
  service: string;
  date: string;
  message?: string;
};

export async function sendScheduleEmail(payload: SchedulePayload) {
  const host = process.env.SMTP_HOST;
  const port = process.env.SMTP_PORT ? Number(process.env.SMTP_PORT) : 587;
  const secure = process.env.SMTP_SECURE === 'true';

  const authUser = process.env.SMTP_USER;
  const authPass = process.env.SMTP_PASS;

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure,
    auth: authUser && authPass ? { user: authUser, pass: authPass } : undefined,
  });

  const from = process.env.FROM_EMAIL || authUser || 'no-reply@example.com';
  const to = process.env.TO_EMAIL;

  const html = `
    <h2>New appointment request</h2>
    <p><strong>Name:</strong> ${payload.name}</p>
    <p><strong>Email:</strong> ${payload.email}</p>
    <p><strong>Phone:</strong> ${payload.phone || '-'}</p>
    <p><strong>Service:</strong> ${payload.service}</p>
    <p><strong>Date / Time:</strong> ${payload.date}</p>
    <p><strong>Message:</strong> ${payload.message || '-'}</p>
  `;

  // If TO_EMAIL is not configured, fall back to a log-only mode so the server
  // can be tested without a real SMTP recipient. This avoids throwing and
  // makes local development smoother.
  const subject = `Appointment request — ${payload.service} — ${payload.name}`;
  if (!to) {
    logger.warn('TO_EMAIL not configured. Email will be logged instead of sent.');
    logger.info('--- EMAIL PREVIEW ---');
    logger.info('From: %s', from);
    logger.info('To: (not configured)');
    logger.info('Subject: %s', subject);
    logger.info('HTML: %s', html);
    logger.info('--- END PREVIEW ---');

    // Return a shape similar to nodemailer's response so callers can continue
    // working with a predictable return value.
    return {
      accepted: [],
      rejected: [],
      envelope: { from, to: [] },
      messageId: `log-only-${Date.now()}`,
    } as unknown as nodemailer.SentMessageInfo;
  }

  const info = await transporter.sendMail({
    from,
    to,
    subject,
    html,
  });

  logger.info('Email sent: %s', (info as any).messageId || JSON.stringify(info));
  return info;
}
