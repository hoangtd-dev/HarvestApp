import express from "express";
import { authMiddleware } from "./middlewares/authMiddleware";
import { errorHandlerMiddleware } from "./middlewares/errorHandlerMiddleware";
import cors from "cors";
import dotenv from "dotenv";
import router from "./routes/index";

dotenv.config();

const app = express();

app.use(cors());

app.use(express.json());

app.use(authMiddleware);

app.use(`/api/${process.env.API_VERSION}`, router);

app.use(errorHandlerMiddleware);

export default app;
