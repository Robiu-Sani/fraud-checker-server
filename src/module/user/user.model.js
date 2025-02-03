import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    number: { type: Number, required: true },
    email: { type: String, sparse: true },
    password: { type: mongoose.Schema.Types.Mixed, default: 123456 },
  },
  { timestamps: true },
);

const Users = mongoose.model('Users', userSchema);

export default Users;
