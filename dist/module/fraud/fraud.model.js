"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importStar(require("mongoose"));
const ScamReportSchema = new mongoose_1.Schema({
    user: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        required: true,
        ref: 'Users',
    },
    fraudType: {
        type: mongoose_1.default.Schema.Types.Mixed,
        required: true,
        default: 'Fraud People',
    },
    scammerName: { type: String },
    scamType: { type: String },
    scamPlace: { type: String },
    bankDetails: { type: String },
    paymentPlatform: { type: String },
    scamAmount: { type: mongoose_1.Schema.Types.Mixed },
    dateTime: { type: String },
    description: { type: String },
    contactInfo: { type: String },
    scammerProfile: { type: String },
    reportStatus: { type: String, default: 'Pending' },
    evidence: [{ type: String }],
    additionalEvidence: [{ type: String }],
    node: [{ type: String }],
}, { timestamps: true });
const ScamReport = mongoose_1.default.model('FraudReport', ScamReportSchema);
exports.default = ScamReport;
