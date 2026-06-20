import { createLogger, format, transports } from 'winston';
import path from 'path';

const logDir = path.resolve(__dirname, '..', 'logs');

const logger = createLogger({
  level: process.env.LOG_LEVEL || 'info',
  format: format.combine(
    format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    format.errors({ stack: true }),
    format.splat(),
    format.json()
  ),
  transports: [
    // Write all logs with level `info` and below to `app.log`
    new transports.File({ filename: path.join(logDir, 'app.log'), maxsize: 5 * 1024 * 1024, maxFiles: 5 }),
    // Also log errors to a separate file
    new transports.File({ filename: path.join(logDir, 'error.log'), level: 'error', maxsize: 5 * 1024 * 1024, maxFiles: 5 }),
  ],
});

// If we're not in production then also log to the `console` with a readable format
if (process.env.NODE_ENV !== 'production') {
  logger.add(
    new transports.Console({
      format: format.combine(format.colorize(), format.simple()),
    })
  );
}

export default logger;
