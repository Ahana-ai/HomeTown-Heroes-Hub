import express from "express";
import UserController from "../controllers/users-controller.js";
import ProdController from "../controllers/product-services-controller.js";
import authorize from "../middleware/authorize.js";
import multer from "multer";
import path from "path";
import PostController from "../controllers/posts-controller.js";
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
// const maxSize = 100 * 1024 * 1024;

const upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    if (
      file.mimetype == "image/png" ||
      file.mimetype == "image/jpg" ||
      file.mimetype == "image/jpeg" ||
      file.mimetype == "video/mp4"
    ) {
      cb(null, true);
    } else {
      cb(null, false);
      return cb(new Error("Only .png, .jpg, .jpeg and .mp4 format allowed!"));
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
router.get("/details/:id", authorize, UserController.getDetails);
router.put("/edit/:id", UserController.editUser);
router.put("/delete/:id", UserController.deleteUser);

// Product - Services Data
router.post("/create-product", ProdController.addProduct);
router.get("/product/:id", ProdController.getDetails);
router.put("/edit-product/:id", ProdController.editProdServ);
router.put("/delete-product/:id", ProdController.deleteProdServ);

// Post Data
router.post("/create-post", PostController.addPost);
router.get("/post-:id", PostController.getPosts);
router.put("/edit-post/:id", PostController.editPost);
router.put("/delete-post/:id", PostController.deletePost);

export default router;
