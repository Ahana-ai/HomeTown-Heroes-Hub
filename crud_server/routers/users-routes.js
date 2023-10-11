import express from "express";
import UserController from "../controllers/users-controller.js";
const router = express.Router();

router.post("/register", UserController.addUser);
router.get("/login", UserController.getUser);

export default router;
