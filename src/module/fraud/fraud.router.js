import express from 'express';
import FraudControllar from './fraud.controllar.js';

const router = express.Router();

router.post('/create', FraudControllar.createFraud);
router.get('/', FraudControllar.getFraud);
router.get('/accept', FraudControllar.getAcceptedFraud);
router.get('/fraud-type/:fraudType', FraudControllar.getSingleFraud);
router.get('/single-fraud/:id', FraudControllar.getSingleFraud);
router.get('/number/:number', FraudControllar.getFraudbyNumber);
router.patch('/update-fraud-byPatch/:id', FraudControllar.updateFraud);
router.put('/update-fraud-byPut/:id', FraudControllar.updateFraud);
router.delete('/delete/:id', FraudControllar.deleteFraud);

export const fraud_router = router;
