
import express from 'express';
import { chatController } from './chat.controller.js';

const router = express.Router();

router.post('/', chatController.insertChat);
router.get('/:id', chatController.getAllChatMessages);
router.delete('/:id/:messageId/:userId/:chunkIndex', chatController.deleteChatMessage);

export const chat_router = router;
