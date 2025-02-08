import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config(); // Ensure environment variables are loaded

const MONGODB_URL = process.env.MONGODB_URL;

if (!MONGODB_URL) {
  throw new Error("Missing MONGODB_URL environment variable");
}

async function connectDB() {
  try {
    await mongoose.connect(MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      autoIndex: true,
    });
    console.log("✅ MongoDB Connected Successfully!");
  } catch (err) {
    console.error("❌ MongoDB Connection Failed:", err);
    process.exit(1);
  }
}

export default connectDB;
