import Contact from './contact.model';

const createContactIntoDB = async (payload) => {
  const result = await Contact.create(payload);
  return result;
};

export const contactServices = {
  createContactIntoDB,
};
