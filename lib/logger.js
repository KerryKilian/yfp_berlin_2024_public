// import winston from 'winston';
// import 'winston-daily-rotate-file';

// // Erstelle Transporter für das tägliche Rotieren von Logs
// const dailyRotateFileTransport = new winston.transports.DailyRotateFile({
//   filename: 'logs/application-%DATE%.log',
//   datePattern: 'YYYY-MM-DD',
//   maxFiles: '14d',
// });

// // Konfiguriere den Logger mit verschiedenen Log-Levels
// const logger = winston.createLogger({
//   level: 'info',
//   format: winston.format.combine(
//     winston.format.timestamp(),
//     winston.format.json()
//   ),
//   transports: [
//     new winston.transports.Console({
//       format: winston.format.simple(),
//     }),
//     dailyRotateFileTransport,
//   ],
// });

// export default logger;
