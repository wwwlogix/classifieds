import express from 'express';
import serverConfig from './config/serverConfig';
import { database } from './util/database';
import { registerRoute } from './util/registerRoute';

const MONGODB_URI = serverConfig.databaseURL;
const PORT = serverConfig.port || 3000;
const app = express();

registerRoute(app);
database(MONGODB_URI, PORT, app);
