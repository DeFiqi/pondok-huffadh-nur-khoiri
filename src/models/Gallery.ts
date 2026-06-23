import mongoose, { Schema } from "mongoose";

const GallerySchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },

    image: {
      type: String,
      required: true,
    },

    category: {
      type: String,
      default: "Kegiatan",
    },

    featured: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Gallery ||
  mongoose.model(
    "Gallery",
    GallerySchema
  );