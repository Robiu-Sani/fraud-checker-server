import mongoose from 'mongoose';
import bcrypt from 'bcryptjs'; // Import bcrypt
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

userSchema.pre('save', async function (next) {
  const errorHandler = (error: mongoose.CallbackError) => {
    next(error);
  };

  if (this.isModified('password')) {
    try {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(this.password, salt);
      this.password = hashedPassword;
      next();
    } catch (error) {
      errorHandler(error as mongoose.CallbackError);
    }
  } else {
    next();
  }
});

const Users = mongoose.model<UserInterface>('Users', userSchema);

export default Users;
