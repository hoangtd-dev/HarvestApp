import { Router } from "express";
import userRouter from "./userRoutes";
import { authMiddleware } from "../../middlewares/authMiddleware";

const router = Router();

router.use(authMiddleware);
router.use(userRouter);

export default router;
