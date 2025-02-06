import { contactServices } from './contact.services';

const createContact = async (req, res) => {
  try {
    const payload = req.body;
    const data = await contactServices.createContactIntoDB(payload);
    res.json({
      status: true,
      message: 'contact created successfully',
      data,
    });
  } catch (error) {
    res.json({
      status: false,
      message: 'contact is not created successfully',
      error,
    });
  }
};

const getContactInto = async (req, res) => {
  try {
    const data = await contactServices.getContactIntoDB();
    res.json({
      status: true,
      message: 'contact get successfully',
      data,
    });
  } catch (error) {
    res.json({
      status: false,
      message: 'contact is not get successfully',
      error,
    });
  }
};

export const contactControllar = {
  createContact,
  getContactInto,
};
