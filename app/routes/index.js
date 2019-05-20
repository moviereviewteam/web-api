import { Router } from 'express';

import movieRouter from './movie';

const router = Router();

router.use('/api/v1/movie', movieRouter);

export default router;