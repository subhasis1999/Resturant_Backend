import mongoose from "mongoose";
import validator from "validator";

const reservationSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true, // ✅ FIX
      minlength: [3, "First Name must contain at least 3 characters"],
      maxlength: [30, "First Name cannot exceed 30 characters"],
      trim: true,
    },

    lastName: {
      type: String,
      required: true, // ✅ FIX
      minlength: [3, "Last Name must contain at least 3 characters"],
      maxlength: [30, "Last Name cannot exceed 30 characters"],
      trim: true,
    },

    email: {
      type: String,
      required: true, // ✅ FIX
      validate: [validator.isEmail, "Provide a valid email"],
      lowercase: true,
    },

    phone: {
      type: String,
      required: true, // ✅ FIX
      minlength: [10, "Phone number must be 10 digits"],
      maxlength: [10, "Phone number must be 10 digits"],
    },

    time: {
      type: String,
      required: true, // ✅ FIX
    },

    date: {
      type: String,
      required: true, // ✅ FIX
    },
  },
  {
    timestamps: true, // ✅ RECOMMENDED
  }
);

export const Reservation = mongoose.model("Reservation", reservationSchema);
