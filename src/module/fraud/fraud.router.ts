import express from 'express';
import FraudControllar from './fraud.controllar';

const router = express.Router();

router.post('/create', FraudControllar.createFraud);
router.get('/', FraudControllar.getFraud);
router.get('/single-user/:id', FraudControllar.getSingleFraud);
router.patch('/update-user-byPatch/:id', FraudControllar.updateFraud);
router.put('/update-user-byPut/:id', FraudControllar.updateFraud);
router.delete('/delete/:id', FraudControllar.deleteFraud);

export const fraud_router = router;
