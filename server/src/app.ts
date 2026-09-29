import express from "express";
import cors from "cors";

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
import mainRoute from "./router/mainRoute.js";
app.use("/api/v1", mainRoute);

export default app;
