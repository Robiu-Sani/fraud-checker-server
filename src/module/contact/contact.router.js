import express from 'express';
import { contactControllar } from './contact.controllar.js';

const router = express.Router();

router.post('/create', contactControllar.createContact);
router.get('/', contactControllar.getContactInto);

export const contact_router = router;
