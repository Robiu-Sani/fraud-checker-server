import adminServices from './admin.services.js';

const createAdmin = async (req, res) => {
  try {
    const payload = req.body;
    const data = await adminServices.createAdminIntoDB(payload);
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

const loginAdmin = async (req, res) => {
  try {
    const payload = req.body;
    const data = await adminServices.adminLoginServices(payload);
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

const updateAdmin = async (req, res) => {
  try {
    const { id } = req.params;
    const payload = req.body;
    const data = await adminServices.updateAdminIntoDB(id, payload);
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

const deleteAdmin = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await adminServices.deleteSingleAdminByIdIntoDB(id);
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

const getSingleAdmin = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await adminServices.getSingleAdminByIdIntoDB(id);
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

const dashboard = async (req, res) => {
  try {
    const data = await adminServices.dashboardOverview();
    res.json(data);
  } catch (error) {
    res.json(error);
  }
};

const getAdmin = async (req, res) => {
  try {
    const data = await adminServices.getAdminIntoDB();
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

const adminControllar = {
  createAdmin,
  updateAdmin,
  deleteAdmin,
  getSingleAdmin,
  getAdmin,
  loginAdmin,
  dashboard,
};

export default adminControllar;
