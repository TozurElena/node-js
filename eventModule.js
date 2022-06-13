
const Logger = require('./log');
const logger = new Logger();

// creer events
logger.on('some_event', (args) => {
  const {id, text} = args;
  console.log(id, text);
});

logger.log('User Logged!');
