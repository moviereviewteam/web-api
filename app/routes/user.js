import { Router } from 'express';
import UserController from '../src/controllers/userController';

const router = Router({ mergeParams: true });

router.get('/get-by-id', UserController('getUserById'));

export default router;