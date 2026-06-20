import { Router, Request, Response } from 'express';
import { sendScheduleEmail } from './mailer';
import logger from './logger';

const router = Router();

router.post('/schedule', async (req: Request, res: Response) => {
  try {
    const { name, email, phone, service, date, message } = req.body;

    // Basic validation
    if (!name || !email || !service || !date) {
      return res.status(400).json({ error: 'Missing required fields: name, email, service, date' });
    }

    // Log incoming request for observability
    logger.info('[schedule] %s - Request from %s - name=%s, email=%s, service=%s, date=%s', new Date().toISOString(), req.ip, name, email, service, date);

    const info = await sendScheduleEmail({ name, email, phone, service, date, message });

    // Log mailer result (or preview) so local testing is visible in server logs
    logger.info('[schedule] mailer result: %o', info);

    return res.json({ ok: true, message: 'Appointment request sent' });
  } catch (err) {
    logger.error('Error sending email: %o', err);
    return res.status(500).json({ error: 'Failed to send email' });
  }
});

export default router;
