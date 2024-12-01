import express from 'express';
const router = express.Router();
import { register, login, linking, update, fetchDetail } from '../controllers/authController.js';

router.post('/register', register);
router.post('/login', login);
router.post('/linking', linking);
router.post('/updatedet', update);
router.post('/fetchdetail', fetchDetail);


export default router;
