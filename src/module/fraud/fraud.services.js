import Users from '../user/user.model.js';
import ScamReport from './fraud.model.js';

const createScamReportIntoDB = async (payload) => {
  try {
    const userNumber = payload.contactInfo;
    let user = await Users.findOne({ number: userNumber });
    if (!user) {
      user = await Users.create({ number: userNumber, email: '' });
    }

    const newData = { userId: user._id, ...payload };

    const result = await ScamReport.create(newData);
    return result;
  } catch (error) {
    console.error('Error:', error);
  }
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

const getSingleFraudByIdIntoDB = async (id) => {
  const result = await ScamReport.findById(id).populate('userId');
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
};
export default ScamReportervices;
