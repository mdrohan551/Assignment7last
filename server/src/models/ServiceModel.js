import mongoose from "mongoose";

const serviceSchema = new mongoose.Schema(
  {
    title: { type: String, unique: true, required: true }, // Unique Title
    description: { type: String, required: true },
    image: { type: String, required: true },
  },
  { timestamps: true, versionKey: false }
);

const ServiceModel = mongoose.model("service", serviceSchema);
export default ServiceModel;
