import express from 'express';
import userControllar from './user.controllar';

const router = express.Router();

router.post('/create', userControllar.createUser);
router.get('/', userControllar.getUser);
router.get('/single-user/:id', userControllar.getSingleUser);
router.patch('/update-user-byPatch/:id', userControllar.updateUser);
router.put('/update-user-byPut/:id', userControllar.updateUser);
router.delete('/delete/:id', userControllar.deleteUser);

export const user_router = router;
