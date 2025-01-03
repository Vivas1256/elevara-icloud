import pino from 'pino';
import moment from 'moment-timezone';

// Función para obtener el timestamp con la zona horaria del sistema
const timezoned = () => {
  return moment().tz(moment.tz.guess()).format('DD-MM-YYYY HH:mm:ss');
};

const logger = pino({
  transport: {
    target: 'pino-pretty',
    options: {
      colorize: true,
      levelFirst: true,
      translateTime: 'SYS:dd-mm-yyyy HH:MM:ss', // Use this para tradução de tempo
      ignore: "pid,hostname"
    },
  },
  timestamp: () => `,"time":"${timezoned()}"`, // Adiciona o timestamp formatado
});

export  { logger };
