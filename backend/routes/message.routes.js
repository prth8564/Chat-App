import express from 'express';
import protectRoute from '../middlewares/protectRoute.js';
import messageController, { getMessages } from '../controllers/message.controller.js';
const router = express.Router();

router.get("/:id" , protectRoute, getMessages );
router.post("/send/:id" , protectRoute , messageController);
export default router;