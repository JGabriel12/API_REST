import { Router } from 'express';
import studentController from '../controllers/studentController';

const router = new Router();

router.get('/', studentController.index);

/* router.post('/', studentController.store);
router.get('/', studentController.update);
router.delete('/', studentController.delete); */

export default router;
