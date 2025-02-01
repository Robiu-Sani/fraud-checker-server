import { UserInterface } from './user.interface';
import Users from './user.model';

const createUsersIntoDB = async (payload: UserInterface) => {
  const result = await Users.create(payload);
  return result;
};

const updateUserIntoDB = async (id: string | number, info: object) => {
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

const getSingleUserByIdIntoDB = async (id: string | number) => {
  const result = await Users.findById(id);
  return result;
};

const deleteSingleUserByIdIntoDB = async (id: string | number) => {
  const result = await Users.findByIdAndDelete(id);
  return result;
};

const userServices = {
  createUsersIntoDB,
  updateUserIntoDB,
  getUserIntoDB,
  getSingleUserByIdIntoDB,
  deleteSingleUserByIdIntoDB,
};
export default userServices;
