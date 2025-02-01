import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import xss from "xss-clean";
import hpp from "hpp";
import path from "path";
import body_parser from 'body-parser';

// Import Essential Filesystem
import router from "./src/routes/api.js";
import {
  Max_JSON_SIZE,
  URL_ENCODER,
  REQUEST_LIMIT_TIME,
  REQUEST_LIMIT_NUMBER,
  WEB_CACHE,
  PORT,
} from "./src/config/config.js";

const app = express();

// Global Application Middleware
const corsOptions = {
  origin: "*",
  credentials: true,
};
app.use(cors(corsOptions));
app.use(express.json({ limit: Max_JSON_SIZE }));
app.use(express.urlencoded({ extended: URL_ENCODER }));
app.use(hpp());
app.use(cookieParser());
app.use(
  helmet({
    crossOriginEmbedderPolicy: false,
  })
);
app.use(xss());

// Rate Limiting middleware
const limiter = rateLimit({
  windowMs: REQUEST_LIMIT_TIME,
  max: REQUEST_LIMIT_NUMBER,
});
app.use(limiter);

// Web Caching
app.set("etag", WEB_CACHE === "true");

// MongoDB Connection

// Set API Routes
app.use("/api/v1", router);  // Notice the change here

app.get("/", (request, response) => {
  // Server to client
  response.json({
    message: "Server is running on port " + PORT,
  });
});

app.use("/uploads-file", express.static("uploads"));

app.all("*", (req, res) => {
  res.status(404).json({
    success: true,
    error: false,
    message: "Route not found",
  });
});

// Serve static files from the React app
// app.use(express.static("client/dist"));

// Add React Front End Routing
// app.get("*", function (req, res) {
//   res.sendFile(path.resolve(__dirname, "client", "dist", "index.html"));
// });

export default app;
