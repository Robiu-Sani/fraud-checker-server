import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    number: { type: Number, required: true },
    password: { type: mongoose.Schema.Types.Mixed, default: 123456 },
  },
  { timestamps: true },
);

const User = mongoose.model('Users', userSchema);

export default User;
