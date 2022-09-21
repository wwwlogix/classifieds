import dotenv from 'dotenv';

const envFound = dotenv.config();
if (!envFound) {
  throw new Error("Couldn't find .env file");
}

const serverConfig = {
  databaseURL: process.env.MONGODB_URI,
  port: process.env.port,
};

export default serverConfig;
