import { Router } from "express";

const mainRoute = Router();

mainRoute.get("/", (req, res) => {
  res.send("Welcome to the Kaccha Chittha API!");
});

export default mainRoute;;