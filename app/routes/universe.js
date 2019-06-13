import { Router } from 'express';
import UniverseController from '../src/controllers/universeController';

const router = Router({ mergeParams: true });

// admin
router.get('/admin/get-all', UniverseController('getAll'));

export default router;