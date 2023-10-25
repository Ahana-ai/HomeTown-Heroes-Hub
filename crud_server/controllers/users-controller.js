import user from "../models/users-model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

class UserController {
  constructor() {}

  /**
   * @method addUser
   * @description Registers Users - Athletes & Business
   */
  async addUser(req, res) {
    try {
      let isUserExists = await user.findOne({
        email: req.body.email,
        isDeleted: false,
      });
  
      if (isUserExists) {
        res.status(200).json({ msg: "User already exists!" });
        return;
      }
  
      // Hashing the Password
      const hashPassword = async (plainPassword) => {
        const saltRounds = 10;
        try {
          const hash = await bcrypt.hash(plainPassword, saltRounds);
          return hash;
        } catch (err) {
          console.error("Error hashing password:", err.message);
          throw err;
        }
      };
  
      const profileImage = req.files["profile_image"][0];
      const coverPhoto = req.files["cover_image"][0];
  
      const data = {
        name: req.body.name,
        email: req.body.email,
        password: await hashPassword(req.body.password),
        role: req.body.role,
        age: req.body.age,
        location: req.body.location,
        achievement: req.body.achievement, 
        talents: req.body.talents,
        bio: req.body.bio,
        profile_image: profileImage ? profileImage.filename : "",
        cover_image: coverPhoto ? coverPhoto.filename : "",
        social_media_links: req.body.social_media_links,
        profile_completion_score: req.body.profile_completion_score,
      };
  
      const newUser = new user(data);
      await newUser.save();
      return res.status(201).json("User created");
    } catch (error) {
      return res.status(500).json({ "Server Error! -> addUser": error.message });
    }
  }
  

  /**
   * @method loginUser
   * @description Login Users
   */
  async loginUser(req, res) {
    try {
      const isUserExists = await user.findOne({
        email: req.body.email,
        isDeleted: false,
      });

      if (isUserExists) {
        const passwordMatch = await bcrypt.compare(
          req.body.password,
          isUserExists.password
        );

        if (passwordMatch) {
          const token = jwt.sign(
            {
              id: isUserExists._id,
              name: isUserExists.name,
              email: isUserExists.email,
              role: isUserExists.role,
            },
            "secretKey",
            { expiresIn: "1hr" }
          );

          res.cookie("userToken", token, { maxAge: 3600000 }); // Set your cookie
          console.log();
          console.log("Logged In...");

          return res.status(200).json({ token, isUserExists });
        } else {
          return res.status(401).json({ error: "Invalid password" });
        }
      } else {
        return res.status(404).json({ error: "User not found" });
      }
    } catch (error) {
      console.error("Error:", error.message);
      return res.status(500).json({ error: "Server Error! --> loginUser" });
    }
  }

  /**
   * @method logout
   * @description Clear Session and Cookies
   */
  async logout(req, res) {
    try {
      res.clearCookie("userToken");
      req.session.destroy((error) => {
        if (error) {
          console.error("Error destroying session:", error);
        } else {
          console.log("Logged Out....");
          return res.status(200).json({ msg: "Okay!" });
        }
      });
    } catch (error) {
      console.error("Error:", error.message);
      return res.status(500).json({ error: "Server Error! -->logout" });
    }
  }

  /**
   * @method getDetails
   * @description It will return the id of the object i.e. user
   */
  async getDetails(req, res) {
    try {
      const isUserExists = await user.findOne({
        id: req.params._id,
        isDeleted: false,
      });

      if (!isUserExists) {
        return res.status(404).json({ error: "User Not Found" });
      }

      console.log(isUserExists._id);

      return res.status(200).json(isUserExists);
    } catch (error) {
      console.error("Error:", error.message);
      return res.status(500).json({ error: "Server Error! --> getId" });
    }
  }

  /**
   * @method editUser
   * @description Editing the user data
   */
  async editUser(req, res) {
    try {
      const userId = req.params.id;
      const updates = req.body;

      // Validate if the user exists
      const existingUser = await user.findById(userId);
      if (!existingUser || existingUser.isDeleted == true) {
        return res.status(404).json({ error: "User not found" });
      }

      // Update user data
      Object.assign(existingUser, updates);
      await existingUser.save();

      return res
        .status(200)
        .json({ msg: "User updated successfully", user: existingUser });
    } catch (error) {
      console.error("Error:", error.message);
      return res.status(500).json({ error: "Server Error! --> editUser" });
    }
  }

  /**
   * @method deleteUser
   * @description Editing the user data
   */
  async deleteUser(req, res) {
    try {
      const userId = req.params.id;
      console.log(userId);

      // Validate if the user exists
      const existingUser = await user.findById(userId);
      if (!existingUser) {
        return res.status(404).json({ error: "User not found" });
      }

      // Delete the user --> Soft Delete
      const updatedData = await user.findOneAndUpdate(
        { _id: userId },
        { isDeleted: true },
        { new: true }
      );
      console.log(updatedData);

      if (!updatedData) {
        return res.status(404).json({ error: "Data not found" });
      }

      return res.status(200).json({ msg: "User deleted successfully" });
    } catch (error) {
      console.error("Error:", error.message);
      return res.status(500).json({ error: "Server Error! --> deleteUser" });
    }
  }

  /**
   * @method userAuth
   * @description To authenticate users
   */
  async userAuth(req, res, next) {
    try {
      if (req.user) {
        next();
      } else {
        res.status(500).json("User not Found!");
      }
    } catch (err) {
      throw err;
    }
  }
}

export default UserController = new UserController();
