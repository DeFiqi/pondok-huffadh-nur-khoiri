import mongoose, { Schema } from "mongoose";

const SettingsSchema = new Schema(
{
siteName: String,
description: String,

logo: String,

whatsapp: String,
email: String,

address: String,

mapsEmbed: String,

facebook: String,
instagram: String,
youtube: String,

},
{
timestamps: true,
}
);

export default mongoose.models.Settings ||
mongoose.model(
"Settings",
SettingsSchema
);
