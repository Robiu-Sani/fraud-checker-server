import Contact from './contact.model';

const createContactIntoDB = async (payload) => {
  const result = await Contact.create(payload);
  return result;
};

const getContactIntoDB = async () => {
  const result = await Contact.find();
  return result;
};

export const contactServices = {
  createContactIntoDB,
  getContactIntoDB,
};
