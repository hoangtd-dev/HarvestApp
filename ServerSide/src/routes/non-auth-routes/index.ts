import { Router } from "express";
import authMechanismRoutes from "./authMechanismRoutes";

const router = Router();

router.use(authMechanismRoutes);

export default router;
