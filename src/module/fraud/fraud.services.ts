import { ScamReportInterface } from './fraud.interface';
import ScamReport from './fraud.model';

const createScamReportIntoDB = async (payload: ScamReportInterface) => {
  const result = await ScamReport.create(payload);
  return result;
};

const updateFraudIntoDB = async (id: string | number, info: object) => {
  const result = await ScamReport.findByIdAndUpdate(
    id,
    { $set: info },
    { new: true },
  );
  return result;
};

const getFraudIntoDB = async () => {
  const result = await ScamReport.find().populate('user');
  return result;
};

const getSingleFraudByIdIntoDB = async (id: string | number) => {
  const result = await ScamReport.findById(id).populate('user');
  return result;
};

const getFraudByTypeIntoDB = async (fraudType: string) => {
  const result = await ScamReport.find({ fraudType: fraudType }).populate(
    'user',
  );
  return result;
};

const deleteSingleFraudByIdIntoDB = async (id: string | number) => {
  const result = await ScamReport.findByIdAndDelete(id);
  return result;
};

const ScamReportervices = {
  createScamReportIntoDB,
  updateFraudIntoDB,
  getFraudIntoDB,
  getSingleFraudByIdIntoDB,
  deleteSingleFraudByIdIntoDB,
  getFraudByTypeIntoDB,
};
export default ScamReportervices;
