import express from 'express';
import adminControllar from './admin.controllar.js';

const router = express.Router();

router.post('/create', adminControllar.createAdmin);
router.post('/login', adminControllar.loginAdmin);
router.get('/', adminControllar.getAdmin);
router.get('/single-admin/:id', adminControllar.getSingleAdmin);
router.patch('/update-admin-byPatch/:id', adminControllar.updateAdmin);
router.put('/update-admin-byPut/:id', adminControllar.updateAdmin);
router.delete('/delete/:id', adminControllar.deleteAdmin);

export const admin_router = router;
