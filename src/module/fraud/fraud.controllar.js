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
    // console.log(error);

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
    const data = await ScamReportervices.getFraudIntoDB();
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

const FraudControllar = {
  createFraud,
  updateFraud,
  deleteFraud,
  getSingleFraud,
  getFraud,
  getFraudbyType,
};

export default FraudControllar;
