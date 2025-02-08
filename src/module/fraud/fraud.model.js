import mongoose, { Schema } from 'mongoose';

const ScamReportSchema = new Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      required: false,
      ref: 'Users',
    },
    fraudType: {
      type: mongoose.Schema.Types.Mixed,
      required: true,
      default: 'Fraud People',
    },
    scammerName: { type: String, required: false },
    relationType: { type: String, required: false },
    witness: { type: String, required: false },
    engagedWith: { type: String, required: false },
    scamType: { type: String, required: false },
    scamPlace: { type: String, required: false },
    bankDetails: { type: String, required: false },
    paymentPlatform: { type: String, required: false },
    scamAmount: { type: Schema.Types.Mixed, required: false },
    dateTime: { type: String, required: false },
    description: { type: String, required: false },
    number: { type: String, required: false },
    scammerProfile: { type: String, required: false },
    reportStatus: { type: String, default: 'Pending' },
    evidence: [{ type: String, required: false }],
    additionalEvidence: [{ type: String, required: false }], //
    node: [{ type: String, required: false }],
  },
  { timestamps: true },
);

const ScamReport = mongoose.model('FraudReport', ScamReportSchema);
export default ScamReport;
