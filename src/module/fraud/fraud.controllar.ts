import { Request, Response } from 'express';
import ScamReportervices from './fraud.services';

const createFraud = async (req: Request, res: Response) => {
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

const updateFraud = async (req: Request, res: Response) => {
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

const deleteFraud = async (req: Request, res: Response) => {
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

const getSingleFraud = async (req: Request, res: Response) => {
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

const getFraud = async (req: Request, res: Response) => {
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
};

export default FraudControllar;
