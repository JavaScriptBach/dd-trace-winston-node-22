// nvm use 22.14.0
// nvm use 20.18.0

const tracer = require("dd-trace");
tracer.init({
  logInjection: true,
});

const { createLogger, format, transports } = require("winston");

const Logger = createLogger({
  level: "info",
  transports: [new transports.Console()],
  format: format.combine(format.errors({ stack: true }), format.prettyPrint()),
});

Logger.error(new Error("test error with stack"));
