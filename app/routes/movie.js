import { Router } from 'express';
import MovieController from '../src/controllers/movieController';

const router = Router({ mergeParams: true });

router.get('/get-by-id', MovieController('getMovieById'));
router.get('/get-all-by-actorid', MovieController('getAllMoviesByActorId'));
router.get('/get-all-by-genreid', MovieController('getAllMoviesByGenreId'));
router.get('/get-all-by-universeid', MovieController('getAllMoviesByUniverseId'));
router.get('/get-favorite-list', MovieController('getFavoriteListByUserId'));

export default router;