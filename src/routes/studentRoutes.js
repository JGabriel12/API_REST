import { Router } from 'express';
import studentController from '../controllers/studentController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

router.get('/', studentController.index);
router.get('/show/:id', studentController.show);
router.post('/store', loginRequired, studentController.store);
router.put('/update/:id', loginRequired, studentController.update);
router.delete('/delete/:id', loginRequired, studentController.delete);

export default router;
