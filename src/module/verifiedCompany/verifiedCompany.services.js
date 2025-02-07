import CompanyVerification from './verifiedCompany.model.js';

const createCompanyVerification = async (payload) => {
  const data = await CompanyVerification.create(payload);
  return data;
};

const getAllCompanyVerifications = async () => {
  const data = await CompanyVerification.find();
  return data;
};

const getAllVerifiedCompany = async () => {
  const data = await CompanyVerification.find({ status: 'Verified' });
  return data;
};

const getSingleCompanyVerification = async (id) => {
  const data = await CompanyVerification.findById(id);
  return data;
};

const updateCompanyVerification = async (id, payload) => {
  const data = await CompanyVerification.findByIdAndUpdate(id, payload, {
    new: true,
  });
  return data;
};

const deleteCompanyVerification = async (id) => {
  const data = await CompanyVerification.findByIdAndDelete(id);
  return data;
};

const Companyservices = {
  createCompanyVerification,
  getAllCompanyVerifications,
  getSingleCompanyVerification,
  updateCompanyVerification,
  deleteCompanyVerification,
  getAllVerifiedCompany,
};

export default Companyservices;
