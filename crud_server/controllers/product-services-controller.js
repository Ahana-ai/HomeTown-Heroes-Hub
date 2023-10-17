import prod from "../models/product-services-model.js";

class ProdController {
  constructor() {}

  /**
   * @method addProduct
   */
  async addProduct(req, res) {
    try {
      const data = {
        type: req.body.type,
        name: req.body.name,
        description: req.body.description,
        category: req.body.category,
        // images: req.file.filename,
        price: req.body.price,
        availability: req.body.availability,
        available_number: req.body.available_number,
      };

      console.log("data.image:", data.images);

      const newProduct = new prod(data);
      await newProduct.save();
      return res.status(201).json("Product created");
    } catch (error) {
      return res
        .status(500)
        .json({ "Server Error! -> addProduct": error.message });
    }
  }

  /**
   * @method getDetails
   * @description It will return the id of the object i.e. user
   */
  async getDetails(req, res) {
    try {
      const isProductExists = await prod.findOne({
        id: req.params._id,
        isDeleted: false,
      });

      if (!isProductExists) {
        return res.status(404).json({ error: "Product Not Found" });
      }

      console.log(isProductExists._id);

      return res.status(200).json(isProductExists);
    } catch (error) {
      console.error("Error:", error.message);
      return res.status(500).json({ error: "Server Error! --> getDetails" });
    }
  }

  /**
   * @method editProdServ
   * @description Editing the user data
   */
  async editProdServ(req, res) {
    try {
      const Id = req.params.id;
      const updates = req.body;

      // Validate if the Product/Services exists
      const existingProduct = await prod.findById(Id);
      if (!existingProduct || existingProduct.isDeleted == true) {
        return res.status(404).json({ error: "Product not found" });
      }

      // Update data
      Object.assign(existingProduct, updates);
      await existingProduct.save();

      return res.status(200).json({
        msg: "Product updated successfully",
        product: existingProduct,
      });
    } catch (error) {
      console.error("Error:", error.message);
      return res.status(500).json({ error: "Server Error! --> editProdServ" });
    }
  }

  /**
   * @method deleteProdServ
   * @description Editing the user data
   */
  async deleteProdServ(req, res) {
    try {
      const Id = req.params.id;
      console.log(Id);

      // Validate if the user exists
      const existingProduct = await prod.findById(Id);
      if (!existingProduct) {
        return res.status(404).json({ error: "Product not found" });
      }

      // Delete the product --> Soft Delete
      const updatedData = await prod.findOneAndUpdate(
        { _id: Id },
        { isDeleted: true },
        { new: true }
      );
      console.log(updatedData);

      if (!updatedData) {
        return res.status(404).json({ error: "Data not found" });
      }

      return res.status(200).json({ msg: "Product deleted successfully" });
    } catch (error) {
      console.error("Error:", error.message);
      return res
        .status(500)
        .json({ error: "Server Error! --> deleteProdServ" });
    }
  }
}

export default ProdController = new ProdController();
