import multer from 'multer';
import { extname, resolve } from 'path';

export default {
  fileFilter: (req, file, cb) => {
    const allowedMimes = ['image/jpeg', 'image/pjpeg', 'image/png'];

    if (allowedMimes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new multer.MulterError('Invalid type file!'));
    }
  },
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, resolve(__dirname, '..', '..', 'uploads'));
    },
    filename: (req, file, cb) => {
      const random = () => Math.floor(Math.random() * 10000 + 1000);
      const filename = `${Date.now()}_${random()}${extname(file.originalname)}`;

      cb(null, filename);
    },
  }),
};
