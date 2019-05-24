import { Router } from 'express';

import movieRouter from './movie';
import actorRouter from './actor';
import genreRouter from './genre';
import articleRouter from './article';
import reviewRouter from './review';
import commentRouter from './comment';
import userRouter from './user';

const router = Router();

router.use('/api/v1/movie', movieRouter);
router.use('/api/v1/actor', actorRouter);
router.use('/api/v1/genre', genreRouter);
router.use('/api/v1/article', articleRouter);
router.use('/api/v1/review', reviewRouter);
router.use('/api/v1/comment', commentRouter);
router.use('/api/v1/user', userRouter);

export default router;