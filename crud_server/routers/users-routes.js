import express from "express";
import UserController from "../controllers/users-controller.js";
import multer from "multer";
import path from "path";
const router = express.Router();

// Setup file storage

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads/");
  },
  filename: (req, file, cb) => {
    cb(
      null,
      file.fieldname +
        "-" +
        Date.now() +
        "pic" +
        path.extname(file.originalname)
    );
  },
});

const maxSize = 5 * 1024 * 1024;

const upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    if (
      file.mimetype == "image/png" ||
      file.mimetype == "image/jpg" ||
      file.mimetype == "image/jpeg"
    ) {
      cb(null, true);
    } else {
      cb(null, false);
      return cb(new Error("Only .png, .jpg and .jpeg format allowed!"));
    }
  },
  limits: {
    fileSize: maxSize,
  },
});


router.post("/register", upload.single("profile_image"), UserController.addUser);
router.post("/login", UserController.getUser);

export default router;
