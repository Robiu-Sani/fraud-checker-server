import Companyservices from './verifiedCompany.services.js';

const createCompanyVerification = async (req, res) => {
  try {
    const payload = req.body;
    const data = await Companyservices.createCompanyVerification(payload);
    console.log(data);

    res.status(200).json({
      status: true,
      message: 'Company verification created successfully',
      data,
    });
  } catch (error) {
    console.log(error);

    res.status(400).json({
      status: false,
      message: 'Failed to create company verification',
      error: error,
    });
  }
};

const getAllCompanyVerifications = async (req, res) => {
  try {
    const data = await Companyservices.getAllCompanyVerifications();
    res.status(200).json({
      status: true,
      message: 'Company verifications retrieved successfully',
      data,
    });
  } catch (error) {
    res.status(400).json({
      status: false,
      message: 'Failed to retrieve company verifications',
      error: error,
    });
  }
};

const getAllVerifiedCompanys = async (req, res) => {
  try {
    const data = await Companyservices.getAllVerifiedCompany();
    res.status(200).json({
      status: true,
      message: 'Company verifications retrieved successfully',
      data,
    });
  } catch (error) {
    res.status(400).json({
      status: false,
      message: 'Failed to retrieve company verifications',
      error: error,
    });
  }
};

const getSingleCompanyVerification = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await Companyservices.getSingleCompanyVerification(id);
    if (!data) {
      return res.status(404).json({
        status: false,
        message: 'Company verification not found',
      });
    }
    res.status(200).json({
      status: true,
      message: 'Company verification retrieved successfully',
      data,
    });
  } catch (error) {
    res.status(400).json({
      status: false,
      message: 'Failed to retrieve company verification',
      error: error,
    });
  }
};

const updateCompanyVerification = async (req, res) => {
  try {
    const { id } = req.params;
    const payload = req.body;
    const data = await Companyservices.updateCompanyVerification(id, payload);
    if (!data) {
      return res.status(404).json({
        status: false,
        message: 'Company verification not found',
      });
    }
    res.status(200).json({
      status: true,
      message: 'Company verification updated successfully',
      data,
    });
  } catch (error) {
    res.status(400).json({
      status: false,
      message: 'Failed to update company verification',
      error: error,
    });
  }
};

const deleteCompanyVerification = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await Companyservices.deleteCompanyVerification(id);
    if (!data) {
      return res.status(404).json({
        status: false,
        message: 'Company verification not found',
      });
    }
    res.status(200).json({
      status: true,
      message: 'Company verification deleted successfully',
      data,
    });
  } catch (error) {
    res.status(400).json({
      status: false,
      message: 'Failed to delete company verification',
      error: error,
    });
  }
};

const VerifyControllar = {
  createCompanyVerification,
  getAllCompanyVerifications,
  getSingleCompanyVerification,
  updateCompanyVerification,
  deleteCompanyVerification,
  getAllVerifiedCompanys,
};

export default VerifyControllar;
