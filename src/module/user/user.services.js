import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import Users from './user.model.js';

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
  const result = await Users.find();
  return result;
};

const getSingleUserByIdIntoDB = async (id) => {
  const result = await Users.findById(id);
  return result;
};

const deleteSingleUserByIdIntoDB = async (id) => {
  const result = await Users.findByIdAndDelete(id);
  return result;
};

const userLoginServices = async (payload) => {
  let user;
  if (payload.email) {
    user = await Users.findOne({ email: payload.email });
  } else if (payload.number) {
    user = await Users.findOne({ number: payload.number });
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
    expiresIn: 60 * 60,
  });

  const userInfo = { ...user.toObject(), password: undefined };
  return { status: true, message: 'Login successful', data: userInfo };
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
