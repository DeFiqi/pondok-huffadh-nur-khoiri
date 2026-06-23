import mongoose, { Schema } from "mongoose";

const ContactSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      default: "",
    },

    phone: {
      type: String,
      default: "",
    },

    subject: {
      type: String,
      default: "",
    },

    message: {
      type: String,
      required: true,
    },

    isRead: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Contact ||
  mongoose.model(
    "Contact",
    ContactSchema
  );