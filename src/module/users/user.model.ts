import mongoose from 'mongoose';
import { UserInterface } from './user.interface';

const userSchema = new mongoose.Schema<UserInterface>(
  {
    username: {
      type: String,
      required: false,
    },
    name: {
      type: String,
      required: false,
    },
    email: {
      type: String,
      required: false,
      unique: true,
      lowercase: true,
      trim: true,
    },
    number: {
      type: mongoose.Schema.Types.Mixed,
      required: false,
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
    },
    type: {
      type: String,
      enum: ['user', 'admin'],
      required: true,
      default: 'user',
    },
  },
  {
    timestamps: true,
  },
);

const Users = mongoose.model<UserInterface>('users', userSchema);

export default Users;
