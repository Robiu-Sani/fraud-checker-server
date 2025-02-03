import ScamReport from './fraud.model.js';

const createScamReportIntoDB = async (payload) => {
  // const result = await ScamReport.create(payload);
  return payload;
};

const updateFraudIntoDB = async (id, info) => {
  const result = await ScamReport.findByIdAndUpdate(
    id,
    { $set: info },
    { new: true },
  );
  return result;
};

const getFraudIntoDB = async () => {
  const result = await ScamReport.find();
  return result;
};

const getSingleFraudByIdIntoDB = async (id) => {
  const result = await ScamReport.findById(id);
  return result;
};

const getFraudByTypeIntoDB = async (fraudType) => {
  const result = await ScamReport.find({ fraudType: fraudType });
  return result;
};

const deleteSingleFraudByIdIntoDB = async (id) => {
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
