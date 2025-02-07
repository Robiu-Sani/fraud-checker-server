import express from 'express';
import VerifyControllar from './verifiedCompany.controllar.js';
const router = express.Router();

router.post('/create', VerifyControllar.createCompanyVerification);
router.get('/', VerifyControllar.getAllCompanyVerifications);
router.get('/single/:id', VerifyControllar.getSingleCompanyVerification);
router.put('/single/:id', VerifyControllar.updateCompanyVerification);
router.delete('/single/:id', VerifyControllar.deleteCompanyVerification);

export const verify_route = router;
