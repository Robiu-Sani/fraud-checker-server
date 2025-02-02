import Users from './user.model.js';
import bcrypt from 'bcryptjs';

const createUsersIntoDB = async (payload) => {
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
  console.log('i am hit in this route');
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

const loginServices = async (payload) => {
  try {
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

    const isPasswordValid = await bcrypt.compare(
      payload.password,
      user.password,
    );
    if (!isPasswordValid) {
      return { status: false, message: 'Incorrect password.' };
    }

    const userInfo = { ...user.toObject(), password: undefined };
    return { status: true, message: 'Login successful', data: userInfo };
  } catch (error) {
    console.error('Error during login:', error);
    return { status: false, message: 'Something went wrong.' };
  }
};

const userServices = {
  createUsersIntoDB,
  updateUserIntoDB,
  getUserIntoDB,
  getSingleUserByIdIntoDB,
  deleteSingleUserByIdIntoDB,
  loginServices,
};
export default userServices;
