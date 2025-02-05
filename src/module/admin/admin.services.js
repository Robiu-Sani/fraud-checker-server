import Admins from './admin.model.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import Users from '../user/user.model.js';
import ScamReport from '../fraud/fraud.model.js';
import Contact from '../contact/contact.model.js';

dotenv.config();

const createAdminIntoDB = async (payload) => {
  const result = await Admins.create(payload);
  return result;
};

const updateAdminIntoDB = async (id, info) => {
  const result = await Admins.findByIdAndUpdate(
    id,
    { $set: info },
    { new: true },
  );
  return result;
};

const getAdminIntoDB = async () => {
  const result = await Admins.find();
  return result;
};

const getSingleAdminByIdIntoDB = async (id) => {
  const result = await Admins.findById(id);
  return result;
};

const deleteSingleAdminByIdIntoDB = async (id) => {
  const result = await Admins.findByIdAndDelete(id);
  return result;
};

const adminLoginServices = async (payload) => {
  let user;
  if (payload.email) {
    user = await Admins.findOne({ email: payload.email });
  } else if (payload.number) {
    user = await Admins.findOne({ number: payload.number });
  }

  if (!user) {
    return {
      status: false,
      message: 'No user found with this email or number.',
    };
  }

  const isPasswordValid = await bcrypt.compare(payload.password, user.password);
  if (!isPasswordValid) {
    return { status: false, message: 'Incorrect password.' };
  }

  const jwtPayload = {
    id: user._id,
    role: user.type,
    email: user.email,
  };

  const eccessToken = jwt.sign(jwtPayload, process.env.SECRET_TOKEN, {
    expiresIn: '10d',
  });

  const userInfo = { ...user.toObject(), password: undefined };
  return { status: true, message: 'Login successful', data: userInfo };
};

const dashboardOverview = async () => {
  const user = await Users.countDocuments();
  const admin = await Admins.countDocuments();
  const reports = await ScamReport.countDocuments();
  const contact = await Contact.countDocuments();
  const result = {
    user,
    admin,
    reports,
    contact,
  };
  return result;
};

const adminServices = {
  createAdminIntoDB,
  updateAdminIntoDB,
  getAdminIntoDB,
  getSingleAdminByIdIntoDB,
  deleteSingleAdminByIdIntoDB,
  adminLoginServices,
  dashboardOverview,
};
export default adminServices;
