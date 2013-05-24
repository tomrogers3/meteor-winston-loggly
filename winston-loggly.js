var winston = Npm.require("winston");

if(winston && winston.transports && !winston.transports.Loggly) {
  Npm.require("winston-loggly");
}

if(typeof Winston != 'undefined') {
  Winston.transports.Loggly = winston.transports.Loggly;
}