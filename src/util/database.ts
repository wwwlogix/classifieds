import mongoose from 'mongoose';

export const database = (dbURI, port, app) => {
  mongoose
    .connect(dbURI)
    .then(() => {
      app.listen(port);
      console.log('Database connection -- OK');
      console.log(`Server Port: ${port}`);
    })
    .catch((err) => {
      console.log(err);
    });
};
