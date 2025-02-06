import mongoose from "mongoose";

const aboutSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    socialLinks: {
      facebook: { type: String, default: "#" },
      linkedin: { type: String, default: "#" },
      twitter: { type: String, default: "#" },
    },
  },
  { timestamps: true, versionKey: false }
);

const AboutModel = mongoose.model("about", aboutSchema);
export default AboutModel;
