import { Router } from 'express';
import userController from '../controllers/UserController';
// Middlewares
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

router.get('/index', loginRequired, userController.index);
router.get('/show/:id', loginRequired, userController.show);

// should exist
router.post('/store', userController.store);
router.put('/update', loginRequired, userController.update);
router.delete('/delete', loginRequired, userController.delete);

export default router;

/*
  - Controllers methods

  - index -> list many -> GET
  - show -> list one   -> GET

  - create/store -> create one -> POST

  - update -> update one -> PATCH or PUT

  - delete -> delete one -> DELETE
*/
