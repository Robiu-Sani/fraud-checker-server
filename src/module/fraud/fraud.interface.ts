import { ObjectId } from 'mongoose';

export interface ScamReportInterface {
  user: ObjectId;
  fraudType: 'Relationship' | 'Fraud People';
  scammerName?: string;
  scamType?: string;
  scamPlace?: string;
  bankDetails?: string;
  paymentPlatform?: string;
  scamAmount?: string | number;
  dateTime?: string;
  description?: string;
  contactInfo?: string;
  scammerProfile?: string;
  reportStatus?: string;
  evidence?: string[];
  additionalEvidence?: string[];
  node?: string[];
}
