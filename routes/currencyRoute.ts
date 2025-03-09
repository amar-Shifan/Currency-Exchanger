import express from 'express';
import { renderHome, convertController } from '../controller/exchangeController';

const router = express.Router();

router.get('/', renderHome);
router.post('/convert', convertController);

export default router;
