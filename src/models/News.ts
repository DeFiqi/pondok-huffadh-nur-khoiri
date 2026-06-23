import mongoose, { Schema } from "mongoose";

const NewsSchema = new Schema(
{
title: {
type: String,
required: true,
},

slug: {
  type: String,
  required: true,
  unique: true,
},

excerpt: {
  type: String,
  required: true,
},

content: {
  type: String,
  required: true,
},

cover: {
  type: String,
  default: "",
},

category: {
  type: String,
  default: "Umum",
},

featured: {
  type: Boolean,
  default: false,
},

published: {
  type: Boolean,
  default: true,
},

views: {
  type: Number,
  default: 0,
},


},
{
timestamps: true,
}
);

export default mongoose.models.News ||
mongoose.model("News", NewsSchema);
