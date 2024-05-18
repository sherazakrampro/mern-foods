import express from "express";
import "dotenv/config";
import cors from "cors";
import mongoose from "mongoose";
import myUserRoute from "./routes/MyUserRoute.js";

mongoose
  .connect(process.env.MONGODB_CONNECTION_STRING)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/my/user", myUserRoute);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
