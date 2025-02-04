import Users from '../user/user.model.js';
import ScamReport from './fraud.model.js';

const createScamReportIntoDB = async (payload) => {
  if (!payload.number) {
    throw new Error('without number fraud will not created');
  }

  const userNumber = payload.number;
  let user = await Users.findOne({ number: userNumber });

  if (!user) {
    user = await Users.create({
      number: userNumber,
      email: `${userNumber}@scambd.com`,
    });
  }

  const newData = {
    userId: user._id,
    ...payload,
  };

  const result = await ScamReport.create(newData);
  return result;
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
  const result = await ScamReport.find().populate('userId');
  return result;
};

const getAcceptedFraudIntoDB = async (category) => {
  const query = { reportStatus: 'Accepted' };

  if (category) {
    query.fraudType = category;
  }
  console.log(category);

  const result = await ScamReport.find(query).populate('userId');
  return result;
};

const getSingleFraudByIdIntoDB = async (id) => {
  const result = await ScamReport.findById(id).populate('userId');
  return result;
};

const getFraudByNumberDB = async (number) => {
  const result = await ScamReport.find({ number: number }).populate('userId');
  return result;
};

const getFraudByTypeIntoDB = async (fraudType) => {
  const result = await ScamReport.find({ fraudType: fraudType }).populate(
    'userId',
  );
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
  getFraudByNumberDB,
  getAcceptedFraudIntoDB,
};
export default ScamReportervices;
