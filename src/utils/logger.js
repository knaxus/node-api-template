const winston = require('winston');
const path = require('path');

// const alignedWithColorsAndTime = winston.format.combine(
//   winston.format.colorize(),
//   winston.format.timestamp(),
//   winston.format.align(),
//   winston.format.printf((info) => {
//     const {
//       timestamp, level, message, ...args
//     } = info;

//     const ts = timestamp.slice(0, 19).replace('T', ' ');
//     return `${ts} [${level}]: ${message} ${
//       Object.keys(args).length ? JSON.stringify(args, null, 2) : ''
//     }`;
//   }),
// );

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.colorize(),
    winston.format.timestamp(),
    winston.format.json(),
  ),
  defaultMeta: { service: 'user-service' },
  colorize: true,
  handleExceptions: true,
  transports: [
    //
    // - Write to all logs with level `info` and below to `combined.log`
    // - Write all logs error (and below) to `error.log`.
    //
    new winston.transports.File({
      filename: path.resolve(__dirname, '../../logs/error.log'),
      level: 'error',
    }),
    new winston.transports.File({ filename: path.resolve(__dirname, '../../logs/combined.log') }),
  ],
  exceptionHandlers: [
    new winston.transports.File({ filename: path.resolve(__dirname, '../../logs/exceptions.log') }),
  ],
});

//
// If we're not in production then log to the `console` with the format:
// `${info.level}: ${info.message} JSON.stringify({ ...rest }) `
//
if (process.env.NODE_ENV !== 'production') {
  logger.add(
    new winston.transports.Console({
      format: winston.format.simple(),
    }),
  );
}

// create a stream object with a 'write' function that will be used by `morgan`
logger.stream = {
  // write(message, encoding) {
  write(message) {
    // use the 'info' log level so the output will be
    // picked up by both transports (file and console)
    logger.info(message);
  },
};

module.exports = logger;
