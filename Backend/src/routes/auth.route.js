import express from 'express'
import { googleAuthLoginController } from '../controllers/auth.controller.js';

const router = express.Router();

router.get('/auth/google',googleAuthLoginController)

export default router