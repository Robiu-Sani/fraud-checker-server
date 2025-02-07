import express from 'express';
import VerifyControllar from './verifiedCompany.controllar.js';
const router = express.Router();

router.post('/create', VerifyControllar.createCompanyVerification);
router.get('/', VerifyControllar.getAllCompanyVerifications);
router.get('/verified', VerifyControllar.getAllVerifiedCompanys);
router.get('/single/:id', VerifyControllar.getSingleCompanyVerification);
router.patch('/single/:id', VerifyControllar.updateCompanyVerification);
router.delete('/single/:id', VerifyControllar.deleteCompanyVerification);

export const verify_route = router;
