import Followers from "../models/followers-model.js";

class FollowerController {
  constructor() {}

  /**
   * @method addFollower
   */
  async addFollower(req, res) {
    try {
      const { userId, followingId } = req.body;

      const newFollower = await Followers.create({
        userId,
        followingId,
      });

      return res.status(201).json(newFollower);
    } catch (error) {
      return res
        .status(500)
        .json({ "Server Error! -> addFollower": error.message });
    }
  }

  /**
   * @method getFollowers
   * @description It will return all the posts of a specific user
   */
  async getFollowers(req, res) {
    try {
      const followers = await Followers.find({
        userId: req.params.id,
        isDeleted: false,
      });

      if (followers.length === 0) {
        return res.status(404).json({ error: "No Followers Found" });
      }

      return res.status(200).json(followers);
    } catch (error) {
      console.error("Error:", error.message);
      return res.status(500).json({ error: "Server Error! --> getFollowers" });
    }
  }

  /**
   * @method deleteFollower
   * @description Editing the Follower data
   */
  async deleteFollower(req, res) {
    try {
      const Id = req.params.id;

      // Validate if the user exists
      const existingFollower = await Followers.findById(Id);
      if (!existingFollower) {
        return res.status(404).json({ error: "Follower not found" });
      }

      // Delete the Follower --> Soft Delete
      const updatedData = await Followers.findOneAndUpdate(
        { _id: Id },
        { isDeleted: true },
        { new: true }
      );
      console.log(updatedData);

      if (!updatedData) {
        return res.status(404).json({ error: "Data not found" });
      }

      return res.status(200).json({ msg: "Follower deleted successfully" });
    } catch (error) {
      console.error("Error:", error.message);
      return res
        .status(500)
        .json({ error: "Server Error! --> deleteFollower" });
    }
  }
}

export default FollowerController = new FollowerController();
