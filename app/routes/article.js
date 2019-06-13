import { Router } from 'express';
import ArticleController from '../src/controllers/articleController';

const router = Router({ mergeParams: true });

router.get('/get-by-id', ArticleController('getArticleById'));
router.get('/get-all-by-movieid', ArticleController('getAllArticlesByMovieId'));

// admin 
router.get('/admin/get-all', ArticleController('getAll'));

export default router;