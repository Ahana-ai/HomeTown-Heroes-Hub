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
      let isUserExists = await user.findOne({ email: req.body.email });

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

      console.log("req.body.password:", req.body.password);

      const data = {
        name: req.body.name,
        email: req.body.email,
        password: await hashPassword(req.body.password),
        role: req.body.role,
        age: req.body.age,
        location: req.body.location,
        acheivement: req.body.acheivement,
        talents: req.body.talents,
        bio: req.body.bio,
        // profile_image: req.file.filename,
        social_media_links: req.body.social_media_links,
        profile_completion_score: req.body.profile_completion_score,
      };

      console.log("data.picture:", data.profile_image);

      const newUser = new user(data);
      await newUser.save();
      return res.status(201).json("User created");
    } catch (error) {
      return res
        .status(500)
        .json({ "Server Error! -> addUser": error.message });
    }
  }

  /**
   * @method loginUser
   * @description Login Users
   */
  async loginUser(req, res) {
    try {
      const isUserExists = await user.findOne({ email: req.body.email });

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
      return res.status(500).json({ error: "Server Error!" });
    }
  }
}

export default UserController = new UserController();
