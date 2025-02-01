import app from "./app.js";
import { PORT } from "./src/config/config.js";
import connectDB from "./src/config/connectDB.js";

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
  });
});
