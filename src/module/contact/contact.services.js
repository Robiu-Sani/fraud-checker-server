import Contact from './contact.model.js';

const createContactIntoDB = async (payload) => {
  const result = await Contact.create(payload);
  return result;
};

const getContactIntoDB = async () => {
  const result = await Contact.find();
  return result;
};

const deleteContactIntoDB = async (id) => {
  const result = await Contact.findOneAndDelete(id);
  return result;
};

export const contactServices = {
  createContactIntoDB,
  getContactIntoDB,
  deleteContactIntoDB,
};
