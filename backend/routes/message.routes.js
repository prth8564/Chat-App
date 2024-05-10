import express from 'express';
import protectRoute from '../middlewares/protectRoute.js';
import messageController from '../controllers/message.controller.js';
const router = express.Router();

router.post("/send/:id" , protectRoute , messageController);
export default router;