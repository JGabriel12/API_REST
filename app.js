import dotenv from 'dotenv';

dotenv.config();

import './src/database';

import express from 'express';
import homeRoutes from './src/routes/homeRoutes';
import userRoutes from './src/routes/userRoutes';
import tokenRoutes from './src/routes/tokenRoutes';
import studentRoutes from './src/routes/studentRoutes';
import imageRoutes from './src/routes/imageRoutes';

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
  }

  routes() {
    this.app.use('/', homeRoutes);

    this.app.use('/users/', userRoutes);

    this.app.use('/tokens/', tokenRoutes);

    this.app.use('/students/', studentRoutes);

    this.app.use('/images/', imageRoutes);
  }
}

export default new App().app;
