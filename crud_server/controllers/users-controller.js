import user from "../models/users-model.js";
import bcrypt from "bcrypt";

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
        profile_image: req.file.filename,
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
   * @method getUser
   * @description Login Users
   */
  async getUser(req, res) {
    try {
      // Comparing the hashed password stored in db with the inputted one
      const comparePassword = async (enteredPassword, storedHashedPassword) => {
        try {
          const passwordMatch = await bcrypt.compare(
            enteredPassword,
            storedHashedPassword
          );
          return passwordMatch;
        } catch (error) {
          console.error("Error comparing passwords:", error.message);
          throw error;
        }
      };

      let isUserExists = await user.findOne({ email: req.body.email });
      console.log(isUserExists);
      if (isUserExists) {
        const passwordMatch = await comparePassword(
          req.body.password,
          isUserExists.password
        );

        if (passwordMatch) {
          // res.contentType("image/jpeg", "image/jpg", "image/png");
          return res.status(200).json(isUserExists);
        } else {
          return res.status(401).json("Invalid password");
        }
      } else {
        return res.status(404).json("User not found");
      }
    } catch (error) {
      console.log(error);
      return res
        .status(500)
        .json({ "Server Error! -> getUser": error.message });
    }
  }
}

export default UserController = new UserController();
