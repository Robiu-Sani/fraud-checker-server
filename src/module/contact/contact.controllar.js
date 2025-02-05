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

export const contactControllar = {
  createContact,
};
