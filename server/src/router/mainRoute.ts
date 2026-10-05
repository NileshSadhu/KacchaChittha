import { Router } from "express";
import authRoute from "./authRoute.js";
import accountRoute from "./accountRoute.js";

const mainRoute = Router();

mainRoute.get("/", (req, res) => {
  res.send("Welcome to the Kaccha Chittha API!");
});

mainRoute.use("/auth", authRoute);
mainRoute.use("/accounts", accountRoute);

export default mainRoute;
