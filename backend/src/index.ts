import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";
import { v2 as cloudinary } from "cloudinary";
import myUserRoute from "./routes/MyUserRoute";
import myRestaurantRoutes from "./routes/MyRestaurantRoutes";
import restaurantRoutes from "./routes/RestaurantRoutes";

mongoose
  .connect(process.env.MONGODB_CONNECTION_STRING as string)
  .then(() => console.log("Connected to Database!"));

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/my/user", myUserRoute);
app.use("/api/my/restaurant", myRestaurantRoutes);
app.use("/api/restaurant", restaurantRoutes);

app.listen(8080, () => {
  console.log("express server started on : http://localhost:8080");
});
