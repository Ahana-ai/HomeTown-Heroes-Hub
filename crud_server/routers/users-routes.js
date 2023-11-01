import express from "express";
import UserController from "../controllers/users-controller.js";
import ProdController from "../controllers/product-services-controller.js";
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

// User Data

router.post(
  "/register",
  upload.fields([
    { name: "profile_image", maxCount: 1 },
    { name: "cover_image", maxCount: 1 },
  ]),
  UserController.addUser
);
router.post("/login", UserController.loginUser);
router.get("/logout", UserController.logout);
router.get("/details/:id",  UserController.getDetails);
router.put("/edit/:id", UserController.userAuth, UserController.editUser);
router.put("/delete/:id", UserController.deleteUser);

// Product - Services Data
router.post("/create-product", ProdController.addProduct);
router.get("/product/:id", ProdController.getDetails);
router.put("/edit-product/:id", ProdController.editProdServ);
router.put("/delete-product/:id", ProdController.deleteProdServ);

export default router;
