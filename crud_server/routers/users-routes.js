import express from "express";
import UserController from "../controllers/users-controller.js";
import multer from "multer";
import path from "path";
const router = express.Router();

// const path = require("path");
// const multer = require("multer");

// Setup file storage

// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "./public/uploads/");
//   },
//   filename: (req, file, cb) => {
//     cb(
//       null,
//       file.fieldname +
//         "-" +
//         Date.now() +
//         "blog" +
//         path.extname(file.originalname)
//     );
//   },
// });

// const maxSize = 5 * 1024 * 1024;

// const upload = multer({
//   storage: storage,
//   fileFilter: (req, file, cb) => {
//     if (
//       file.mimetype == "image/png" ||
//       file.mimetype == "image/jpg" ||
//       file.mimetype == "image/jpeg"
//     ) {
//       cb(null, true);
//     } else {
//       cb(null, false);
//       return cb(new Error("Only .png, .jpg and .jpeg format allowed!"));
//     }
//   },
//   limits: {
//     fileSize: maxSize,
//   },
// });

// const storage = multer.memoryStorage(); // Store file in memory as a Buffer
// const upload = multer({ storage: storage });

// router.post("/register", upload.single("image"), UserController.addUser);
router.post("/register", UserController.addUser);
router.get("/login", UserController.getUser);

export default router;
