import { Request, Response } from 'express';
import userServices from './user.services';

const createUser = async (req: Request, res: Response) => {
  try {
    const payload = req.body;
    const data = await userServices.createUsersIntoDB(payload);
    res.json({
      status: true,
      message: 'User created successfully',
      data,
    });
  } catch (error) {
    res.json({
      status: false,
      message: 'User is not created successfully',
      error,
    });
  }
};

const loginUser = async (req: Request, res: Response) => {
  try {
    const payload = req.body;
    const data = await userServices.loginServices(payload);
    res.json({
      status: true,
      message: 'User login successfully',
      data,
    });
  } catch (error) {
    res.json({
      status: false,
      message: 'User is not login successfully',
      error,
    });
  }
};

const updateUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const payload = req.body;
    const data = await userServices.updateUserIntoDB(id, payload);
    res.json({
      status: true,
      message: 'User updated successfully',
      data,
    });
  } catch (error) {
    res.json({
      status: false,
      message: 'User is not updated successfully',
      error,
    });
  }
};

const deleteUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const data = await userServices.deleteSingleUserByIdIntoDB(id);
    res.json({
      status: true,
      message: 'User deleted successfully',
      data,
    });
  } catch (error) {
    res.json({
      status: false,
      message: 'User is not deleted successfully',
      error,
    });
  }
};

const getSingleUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const data = await userServices.getSingleUserByIdIntoDB(id);
    res.json({
      status: true,
      message: 'User get successfully',
      data,
    });
  } catch (error) {
    res.json({
      status: false,
      message: 'User is not get successfully',
      error,
    });
  }
};

const getUser = async (req: Request, res: Response) => {
  try {
    const data = await userServices.getUserIntoDB();
    res.json({
      status: true,
      message: 'User get successfully',
      data,
    });
  } catch (error) {
    res.json({
      status: false,
      message: 'User is not get successfully',
      error,
    });
  }
};

const userControllar = {
  createUser,
  updateUser,
  deleteUser,
  getSingleUser,
  getUser,
  loginUser,
};

export default userControllar;
