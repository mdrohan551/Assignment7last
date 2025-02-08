import mongoose from "mongoose";

const sliderSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    subtile: { type: String, required: true },
      image: { type: String, required: true },
  },
  { timestamps: true, versionKey: false }
);

const SliderModel = mongoose.model("slider", sliderSchema);
export default SliderModel;
