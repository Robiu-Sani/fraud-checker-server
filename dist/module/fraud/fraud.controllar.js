"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fraud_services_1 = __importDefault(require("./fraud.services"));
const createFraud = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const payload = req.body;
        const data = yield fraud_services_1.default.createScamReportIntoDB(payload);
        res.json({
            status: true,
            message: 'Fraud created successfully',
            data,
        });
    }
    catch (error) {
        res.json({
            status: false,
            message: 'Fraud is not created successfully',
            error,
        });
    }
});
const updateFraud = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const payload = req.body;
        const data = yield fraud_services_1.default.updateFraudIntoDB(id, payload);
        res.json({
            status: true,
            message: 'Fraud updated successfully',
            data,
        });
    }
    catch (error) {
        res.json({
            status: false,
            message: 'Fraud is not updated successfully',
            error,
        });
    }
});
const deleteFraud = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const data = yield fraud_services_1.default.deleteSingleFraudByIdIntoDB(id);
        res.json({
            status: true,
            message: 'Fraud deleted successfully',
            data,
        });
    }
    catch (error) {
        res.json({
            status: false,
            message: 'Fraud is not deleted successfully',
            error,
        });
    }
});
const getSingleFraud = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const data = yield fraud_services_1.default.getSingleFraudByIdIntoDB(id);
        res.json({
            status: true,
            message: 'Fraud get successfully',
            data,
        });
    }
    catch (error) {
        res.json({
            status: false,
            message: 'Fraud is not get successfully',
            error,
        });
    }
});
const getFraud = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield fraud_services_1.default.getFraudIntoDB();
        res.json({
            status: true,
            message: 'Fraud get successfully',
            data,
        });
    }
    catch (error) {
        res.json({
            status: false,
            message: 'Fraud is not get successfully',
            error,
        });
    }
});
const FraudControllar = {
    createFraud,
    updateFraud,
    deleteFraud,
    getSingleFraud,
    getFraud,
};
exports.default = FraudControllar;
