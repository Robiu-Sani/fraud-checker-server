"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fraud_router = void 0;
const express_1 = __importDefault(require("express"));
const fraud_controllar_1 = __importDefault(require("./fraud.controllar"));
const router = express_1.default.Router();
router.post('/create', fraud_controllar_1.default.createFraud);
router.get('/', fraud_controllar_1.default.getFraud);
router.get('/single-user/:id', fraud_controllar_1.default.getSingleFraud);
router.patch('/update-user-byPatch/:id', fraud_controllar_1.default.updateFraud);
router.put('/update-user-byPut/:id', fraud_controllar_1.default.updateFraud);
router.delete('/delete/:id', fraud_controllar_1.default.deleteFraud);
exports.fraud_router = router;
