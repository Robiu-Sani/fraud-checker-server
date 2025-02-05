import mongoose from 'mongoose';

// Define the schema for the contact form
const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  number: {
    type: String,
    required: true,
    trim: true,
    match: [/^\d{10}$/, 'Please provide a valid 10-digit phone number'], // Ensures the number is 10 digits
  },
  message: {
    type: String,
    required: true,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Create the model from the schema
const Contact = mongoose.model('Contact', contactSchema);

export default Contact;
