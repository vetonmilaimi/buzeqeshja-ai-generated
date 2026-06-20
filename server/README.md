# buzeqeshja - Email scheduling server

This small Express + TypeScript server receives appointment scheduling requests and forwards them by email using SMTP (nodemailer).

## Setup

1. Copy `.env.example` to `.env` and fill environment variables.

2. Install dependencies:

```bash
cd server
npm install
```

3. Run in development (auto-restarts on change):

```bash
npm run dev
```

4. Build and run production:

```bash
npm run build
npm start
```

## API

POST /api/schedule

Body (JSON):

- name (string) - required
- email (string) - required
- phone (string) - optional
- service (string) - required
- date (string) - required (date/time as string)
- message (string) - optional

Response: { ok: true, message: 'Appointment request sent' }

## Notes

- Use a real SMTP provider (Mailgun/SendGrid/Gmail or Mailtrap for testing). If using Gmail, ensure you configure an app password or use OAuth.
- The server expects `TO_EMAIL` configured to receive appointment emails.
