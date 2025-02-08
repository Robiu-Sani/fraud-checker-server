import ScamReportervices from './fraud.services.js';

const createFraud = async (req, res) => {
  try {
    const payload = req.body;
    const data = await ScamReportervices.createScamReportIntoDB(payload);
    res.json({
      status: true,
      message: 'Fraud created successfully',
      data,
    });
  } catch (error) {
    res.json({
      status: false,
      message: 'Fraud is not created successfully',
      error,
    });
  }
};

const updateFraud = async (req, res) => {
  try {
    const { id } = req.params;
    const payload = req.body;
    const data = await ScamReportervices.updateFraudIntoDB(id, payload);
    res.json({
      status: true,
      message: 'Fraud updated successfully',
      data,
    });
  } catch (error) {
    res.json({
      status: false,
      message: 'Fraud is not updated successfully',
      error,
    });
  }
};

const deleteFraud = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await ScamReportervices.deleteSingleFraudByIdIntoDB(id);
    res.json({
      status: true,
      message: 'Fraud deleted successfully',
      data,
    });
  } catch (error) {
    res.json({
      status: false,
      message: 'Fraud is not deleted successfully',
      error,
    });
  }
};

const getAcceptedFraud = async (req, res) => {
  try {
    const { cetagory } = req.query;
    const data = await ScamReportervices.getAcceptedFraudIntoDB(cetagory);

    res.json({
      status: true,
      message: 'Fraud retrieved successfully',
      data,
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: 'Failed to retrieve fraud data',
      error: error,
    });
  }
};

const getFraudbyNumber = async (req, res) => {
  try {
    const { number } = req.params;
    const data = await ScamReportervices.getFraudByNumberDB(number);
    res.json({
      status: true,
      message: 'Fraud get successfully',
      data,
    });
  } catch (error) {
    res.json({
      status: false,
      message: 'Fraud is not get successfully',
      error,
    });
  }
};

const getSingleFraud = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await ScamReportervices.getSingleFraudByIdIntoDB(id);
    res.json({
      status: true,
      message: 'Fraud get successfully',
      data,
    });
  } catch (error) {
    res.json({
      status: false,
      message: 'Fraud is not get successfully',
      error,
    });
  }
};

const getFraudbyType = async (req, res) => {
  try {
    const { fraudType } = req.params;
    const data = await ScamReportervices.getFraudByTypeIntoDB(fraudType);
    res.json({
      status: true,
      message: 'Fraud get successfully',
      data,
    });
  } catch (error) {
    res.json({
      status: false,
      message: 'Fraud is not get successfully',
      error,
    });
  }
};

const getFraud = async (req, res) => {
  try {
    const { scamType, search } = req.query;
    const data = await ScamReportervices.getFraudIntoDB(scamType, search);

    res.status(200).json({
      status: true,
      message: 'Fraud reports fetched successfully',
      data,
    });
  } catch (error) {
    console.error('Error fetching fraud reports:', error);
    res.status(500).json({
      status: false,
      message: 'Failed to fetch fraud reports',
      error: error.message,
    });
  }
};

const FraudControllar = {
  createFraud,
  updateFraud,
  deleteFraud,
  getSingleFraud,
  getFraud,
  getFraudbyType,
  getFraudbyNumber,
  getAcceptedFraud,
};

export default FraudControllar;
