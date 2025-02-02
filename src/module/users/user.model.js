import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const userSchema = new mongoose.Schema(
  {
    username: { type: String, trim: true, minlength: 3 },
    name: { type: String, trim: true, minlength: 2 },
    email: {
      type: String,
      unique: true,
      lowercase: true,
      trim: true,
      required: [true, 'Email is required'],
      match: [/^\S+@\S+\.\S+$/, 'Please fill a valid email address'],
    },
    number: {
      type: mongoose.Schema.Types.Mixed,
      validate: {
        validator: (v) => !isNaN(v),
        message: 'Invalid phone number',
      },
    },
    password: {
      type: String,
      required: [true, 'Password is required'],
      minlength: [6, 'Password must be at least 6 characters'],
    },
    type: {
      type: String,
      enum: ['admin'],
      default: 'admin',
    },
  },
  { timestamps: true },
);

userSchema.pre('save', async function (next) {
  if (this.isModified('password')) {
    try {
      const salt = await bcrypt.genSalt(10);
      this.password = await bcrypt.hash(this.password, salt);
    } catch (error) {
      return next(error);
    }
  }
  next();
});

userSchema.methods.comparePassword = async function (candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password);
};

const Users = mongoose.model('Users', userSchema);
export default Users;
