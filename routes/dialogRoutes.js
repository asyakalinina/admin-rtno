import * as express from 'express';
import { getAllDialogs } from '../controllers/dialogController.js';

const router = express.Router();

router.get('/dialogs', getAllDialogs);

export default router;
