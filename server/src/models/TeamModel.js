import mongoose from "mongoose";

const teamSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    designation: { type: String, required: true },
    image: { type: String, required: true },
  },
  { timestamps: true, versionKey: false }
);

const TeamModel = mongoose.model("team", teamSchema);
export default TeamModel;
