import express from "express";
import { authMiddleware } from "./middlewares/authMiddleware.mjs";
import { errorHandlerMiddleware } from "./middlewares/errorHandlerMiddleware.mjs";
import router from "./routes/index.mjs";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(cors());

app.use(express.json());

app.use(authMiddleware);

app.use(`/api/${process.env.API_VERSION}`, router);

app.use(errorHandlerMiddleware);

export default app;
