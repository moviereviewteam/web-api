import { Router } from 'express';

import movieRouter from './movie';
import actorRouter from './actor';

const router = Router();

router.use('/api/v1/movie', movieRouter);
router.use('/api/v1/actor', actorRouter);

export default router;