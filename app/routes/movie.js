import { Router } from 'express';
import MovieController from '../src/controllers/movieController';

const router = Router({ mergeParams: true });

router.get('/get-by-id', MovieController('getMovieById'));
router.get('/get-all-by-actorid', MovieController('getAllMoviesByActorId'))

export default router;