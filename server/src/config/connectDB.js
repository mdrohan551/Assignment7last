import mongoose from "mongoose";
import { MONGODB_URL } from "../config/config.js";

if (!MONGODB_URL) {
  throw new Error("Missing MONGODB_URL environment variable");
}

async function connectDB() {
  try {
    await mongoose.connect(MONGODB_URL, {
      autoIndex: true,
    });
    console.log("Connected to MongoDB successfully!");
  } catch (err) {
    console.error("Failed to connect to MongoDB!", err);
    process.exit(1);
  }
}

export default connectDB;
