import { Router } from "express";
import { validateCreateUser } from "../validators/userValidators";
import UserController from "../controllers/userController";
import { validatorErrorResolverMiddleware } from "../middlewares/validatorErrorResolverMiddleware";

const router = Router();

router.post(
  "/users",
  validateCreateUser,
  validatorErrorResolverMiddleware,
  UserController.createUser
);
router.get("/users/:id", UserController.getUserById);
router.get("/users", UserController.getUsers);

export default router;
