import UserServices from './user.services.js';

const createUser = async (req, res) => {
  try {
    const payload = req.body;
    // console.log(payload);
    const data = await UserServices.createUserIntoDB(payload);
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

const loginUser = async (req, res) => {
  try {
    const payload = req.body;
    const data = await UserServices.userLoginServices(payload);
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

const changePassword = async (req, res) => {
  try {
    const { id } = req.params;
    const payload = req.body;
    const data = await UserServices.changePAsswordDB(id, payload);
    res.json({
      status: true,
      message: 'Password Changed successfully',
      data,
    });
  } catch (error) {
    res.json({
      status: false,
      message: 'Password is not  Changed successfully',
      error,
    });
  }
};

const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const payload = req.body;
    const data = await UserServices.updateUserIntoDB(id, payload);
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

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await UserServices.deleteSingleUserByIdIntoDB(id);
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

const getSingleUser = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await UserServices.getSingleUserByIdIntoDB(id);
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

const getUser = async (req, res) => {
  try {
    const data = await UserServices.getUserIntoDB();
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

const UserControllar = {
  createUser,
  updateUser,
  deleteUser,
  getSingleUser,
  getUser,
  loginUser,
  changePassword,
};

export default UserControllar;
