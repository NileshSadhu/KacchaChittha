import { Router } from "express";
import authRoute from "./authRoute.js";

const mainRoute = Router();

mainRoute.get("/", (req, res) => {
  res.send("Welcome to the Kaccha Chittha API!");
});

mainRoute.use("/auth", authRoute);

export default mainRoute;
