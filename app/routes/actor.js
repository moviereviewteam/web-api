import { Router } from 'express';
import ActorController from '../src/controllers/actorController';

const router = Router({ mergeParams: true });

router.get('/get-by-id', ActorController('getActorById'));
router.get('/get-all-by-movieid', ActorController('getAllActorsByMovieId'));

export default router;