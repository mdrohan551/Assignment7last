import mongoose from "mongoose";

const aboutSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    designation: { type: String, unique: true, required: true },
    image: { type: String, required: true },
    socialLinks: {
      facebook: { type: String, required: true },
      linkedin: { type: String, required: true },
    },
  },
  { timestamps: true, versionKey: false }
);

const AboutModel = mongoose.model("about", aboutSchema);
export default AboutModel;
