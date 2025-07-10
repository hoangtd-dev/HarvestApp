import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import authRouter from "./routes/auth-routes/index";
import nonAuthRouter from "./routes/non-auth-routes/index";

dotenv.config();

const app = express();

app.use(cors());

app.use(express.json());

app.use(`/api/${process.env.API_VERSION}`, nonAuthRouter, authRouter);

// app.use(errorHandlerMiddleware);

export default app;
