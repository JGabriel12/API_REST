import { Router } from 'express';
import userController from '../controllers/UserController';

const router = new Router();

router.post('/store', userController.store);
router.get('/index', userController.index);
router.get('/show/:id', userController.show);
router.put('/update/:id', userController.update);
router.delete('/delete/:id', userController.delete);

export default router;

/*
  - Controllers methods

  - index -> list many -> GET
  - show -> list one   -> GET

  - create/store -> create one -> POST

  - update -> update one -> PATCH or PUT

  - delete -> delete one -> DELETE
*/
