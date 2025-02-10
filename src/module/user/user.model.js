import mongoose from 'mongoose';

const generateRandomPassword = () => {
  return Math.floor(10000000 + Math.random() * 90000000).toString();
};

const userSchema = new mongoose.Schema(
  {
    number: { type: Number, required: true },
    name: { type: String, required: false },
    // name: { type: String, required: false },
    email: { type: String, sparse: true },
    password: {
      type: mongoose.Schema.Types.Mixed,
      default: generateRandomPassword,
    },
  },
  { timestamps: true },
);

const Users = mongoose.model('Users', userSchema);

export default Users;
