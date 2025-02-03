import express from 'express';
import UserControllar from './user.controllar.js';

const router = express.Router();

router.post('/create', UserControllar.createUser);
router.post('/login', UserControllar.loginUser);
router.get('/', UserControllar.getUser);
router.get('/single-user/:id', UserControllar.getSingleUser);
router.patch('/update-user-byPatch/:id', UserControllar.updateUser);
router.put('/update-user-byPut/:id', UserControllar.updateUser);
router.delete('/delete/:id', UserControllar.deleteUser);

export const user_router = router;
