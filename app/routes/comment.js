import { Router } from 'express';
import CommentController from '../src/controllers/commentController';

const router = Router({ mergeParams: true });

router.get('/get-all-by-articleid', CommentController('getAllCommentsByArticleId'));
router.get('/get-all-lv2-comments', CommentController('getAllLv2CommentsByParentId'));

export default router;