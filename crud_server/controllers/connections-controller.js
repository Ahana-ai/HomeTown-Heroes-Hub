import Connections from "../models/connections-model.js";

class ConnectionController {
  constructor() {}

  /**
   * @method addConnection
   */
  async addConnection(req, res) {
    try {
      const { userId, connectionId } = req.body;

      let isConnectionExists = await user.findOne({
        userId: req.body.userId,
        connectionId: req.body.followingId,
        isDeleted: false,
      });
      if (isConnectionExists) {
        res.status(200).json({ msg: "Connection already exists!" });
        return;
      }

      const newConnection = await Connections.create({
        userId,
        connectionId,
      });

      return res.status(201).json(newConnection);
    } catch (error) {
      return res
        .status(500)
        .json({ "Server Error! -> addConnection": error.message });
    }
  }

  /**
   * @method getConnections
   * @description It will return all the Connections of a specific user
   */
  async getConnections(req, res) {
    try {
      const connections = await Connections.find({
        userId: req.params.id,
        isDeleted: false,
      });

      if (connections.length === 0) {
        return res.status(404).json({ error: "No Connections Found" });
      }

      return res.status(200).json(connections);
    } catch (error) {
      console.error("Error:", error.message);
      return res
        .status(500)
        .json({ error: "Server Error! --> getConnections" });
    }
  }

  /**
   * @method deleteConnection
   * @description Editing the Connection data
   */
  async deleteConnection(req, res) {
    try {
      const Id = req.params.id;

      // Validate if the user exists
      const existingConnection = await Connections.findById(Id);
      if (!existingConnection) {
        return res.status(404).json({ error: "Connection not found" });
      }

      // Delete the connection --> Soft Delete
      const updatedData = await Connections.findOneAndUpdate(
        { _id: Id },
        { isDeleted: true },
        { new: true }
      );

      if (!updatedData) {
        return res.status(404).json({ error: "Data not found" });
      }

      return res.status(200).json({ msg: "Connection deleted successfully" });
    } catch (error) {
      console.error("Error:", error.message);
      return res
        .status(500)
        .json({ error: "Server Error! --> deleteConnection" });
    }
  }
}

export default ConnectionController = new ConnectionController();
