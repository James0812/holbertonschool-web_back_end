import express from 'express';
import mapRoutes from './routes/index.js';

const app = express();
const port = 1245;

mapRoutes(app);

if (require.main === module) {
  app.listen(port);
}

export default app;

