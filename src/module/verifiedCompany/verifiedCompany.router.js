import express from 'express';
import VerifyControllar from './verifiedCompany.controllar.js';
const router = express.Router();

router.post('/', VerifyControllar.createCompanyVerification);
router.get('/', VerifyControllar.getAllCompanyVerifications);
router.get('/:id', VerifyControllar.getSingleCompanyVerification);
router.put('/:id', VerifyControllar.updateCompanyVerification);
router.delete('/:id', VerifyControllar.deleteCompanyVerification);

export const verify_route = router;
