import { Router } from 'express';
import GenreController from '../src/controllers/genreController';

const router = Router({ mergeParams: true });

router.get('/get-by-id', GenreController('getGenreById'));
router.get('/get-all-by-movieid', GenreController('getAllGenresByMovieId'));

export default router;