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
          console.error("Error hashing password:", err);
          throw err;
        }
      };

      const data = {
        name: req.body.name,
        email: req.body.email,
        password: await hashPassword(req.body.password),
      };

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
      const comparePassword = async (enteredPassword, storedHashedPassword) => {
        try {
          const passwordMatch = await bcrypt.compare(
            enteredPassword,
            storedHashedPassword
          );
          return passwordMatch;
        } catch (error) {
          console.error("Error comparing passwords:", error);
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
