import { Router } from 'express';
import ReviewController from '../src/controllers/reviewController';

const router = Router({ mergeParams: true });

router.get('/get-all-by-movieid', ReviewController('getAllReviewsByMovieId'));
router.post('/add', ReviewController('addReview'));

export default router;