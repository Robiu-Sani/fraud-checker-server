import mongoose, { Schema } from 'mongoose';
import { ScamReportInterface } from './fraud.interface';

const ScamReportSchema = new Schema<ScamReportInterface>(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'Users',
    },
    fraudType: {
      type: mongoose.Schema.Types.Mixed,
      required: true,
      default: 'Fraud People',
    },
    scammerName: { type: String },
    scamType: { type: String },
    scamPlace: { type: String },
    bankDetails: { type: String },
    paymentPlatform: { type: String },
    scamAmount: { type: Schema.Types.Mixed },
    dateTime: { type: String },
    description: { type: String },
    contactInfo: { type: String },
    scammerProfile: { type: String },
    reportStatus: { type: String, default: 'Pending' },
    evidence: [{ type: String }],
    additionalEvidence: [{ type: String }],
    node: [{ type: String }],
  },
  { timestamps: true },
);

const ScamReport = mongoose.model<ScamReportInterface>(
  'FraudReport',
  ScamReportSchema,
);

export default ScamReport;
