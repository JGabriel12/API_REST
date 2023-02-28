import { Router } from 'express';
import userController from '../controllers/UserController';

const router = new Router();

router.post('/store', userController.store);

export default router;

/*
  - Controllers methods

  - index -> list many -> GET
  - show -> list one   -> GET

  - create/store -> create one -> POST

  - update -> update one -> PATCH or PUT

  - delete -> delete one -> DELETE
*/
