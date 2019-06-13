import { Router } from 'express';
import ActorController from '../src/controllers/actorController';

const router = Router({ mergeParams: true });

router.get('/get-by-id', ActorController('getActorById'));
router.get('/get-all-by-movieid', ActorController('getAllActorsByMovieId'));

// admin
router.get('/admin/get-all', ActorController('getAll'));

export default router;