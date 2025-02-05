import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import Users from './user.model.js';
import ScamReport from '../fraud/fraud.model.js';

dotenv.config();

const createUserIntoDB = async (payload) => {
  const result = await Users.create(payload);
  return result;
};

const updateUserIntoDB = async (id, info) => {
  const result = await Users.findByIdAndUpdate(
    id,
    { $set: info },
    { new: true },
  );
  return result;
};

const getUserIntoDB = async () => {
  const users = await Users.find();
  let reports = [];

  for (const user of users) {
    const userReports = await ScamReport.find({ userId: user._id });
    reports.push({ user, reports: userReports });
  }

  return reports;
};

const getSingleUserByIdIntoDB = async (id) => {
  const user = await Users.findById(id);
  const reports = await ScamReport.find({ userId: id });
  const result = {
    user,
    reports,
  };
  return result;
};

const deleteSingleUserByIdIntoDB = async (id) => {
  const result = await Users.findByIdAndDelete(id);
  return result;
};

const userLoginServices = async (payload) => {
  let user;
  if (payload.number) {
    user = await Users.findOne({ number: payload.number });
  }

  if (!user) {
    return {
      status: false,
      message: 'No user found with this number.',
    };
  }
  console.log(user.password, payload.password);
  if (user.password != payload.password) {
    return { status: false, message: 'Incorrect password.' };
  }

  return { status: true, message: 'Login successful', data: user };
};

const UserServices = {
  createUserIntoDB,
  updateUserIntoDB,
  getUserIntoDB,
  getSingleUserByIdIntoDB,
  deleteSingleUserByIdIntoDB,
  userLoginServices,
};
export default UserServices;
