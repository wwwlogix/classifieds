import HttpError from '../middleware/httpError';
import adsRoutes from '../routes/adsRoutes';
import bodyParser from 'body-parser';

export const registerRoute = (app) => {
  app.use(bodyParser.json());

  app.use('/api/classifieds', adsRoutes);

  app.use(() => {
    throw new HttpError('404 Not Found.', 404);
  });

  app.use((error, req, res, next) => {
    if (res.headerSent) {
      return next(error);
    }
    res.status(error.code || 500);
    res.json({ message: error.message || 'An unknown error occurred!' });
  });
};
