import express from "express";
import "dotenv/config";
import cors from "cors";
import connectToDb from "./mongodb/connect.js";
import postRoutes from "./routes/postRoutes.js";
import dalleRoutes from "./routes/dalleRoutes.js";
const app = express();
app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use("/api/v1/post", postRoutes);
app.use("/api/v1/dalle", dalleRoutes);
app.get("/", async (req, res) => {
  res.send("Hello World");
});
const PORT = process.env.PORT;
const startServer = () => {
  try {
    connectToDb();
    app.listen(PORT, () => {
      console.log("The server is started");
    });
  } catch (error) {
    console.log(error.message);
  }
};
startServer();
