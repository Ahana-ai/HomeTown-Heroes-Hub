import express from "express";
import UserController from "../controllers/users-controller.js";
import ProdController from "../controllers/product-services-controller.js";
import authorize from "../middleware/authorize.js";
import PostController from "../controllers/posts-controller.js";
const router = express.Router();

// User Data

router.post("/register", UserController.addUser);
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
