import Post from "../models/posts-model.js";

class PostController {
  constructor() {}

  /**
   * @method addPost
   */
  async addPost(req, res) {
    try {
      const { userId, images, text, caption, likes, comments, shares } =
        req.body;

      if (!images || images.length === 0) {
        console.log("No images received or empty array");
      }

      const newPost = await Post.create({
        userId,
        images,
        text,
        caption,
        likes,
        comments,
        shares,
      });

      return res.status(201).json(newPost);
    } catch (error) {
      return res
        .status(500)
        .json({ "Server Error! -> addPost": error.message });
    }
  }

  /**
   * @method getPosts
   * @description It will return all the posts of a specific user
   */
  async getPosts(req, res) {
    try {
      const posts = await Post.find({
        userId: req.params.id,
        isDeleted: false,
      });

      if (posts.length === 0) {
        return res.status(200).json({ error: "No Posts Found" });
      }

      return res.status(200).json(posts);
    } catch (error) {
      console.error("Error:", error.message);
      return res.status(500).json({ error: "Server Error! --> getDetails" });
    }
  }

  // /**
  //  * @method editPost
  //  * @description Editing the post data
  //  */
  // async editPost(req, res) {
  //   try {
  //     const Id = req.params.id;
  //     const updates = req.body;

  //     // Validate if the Product/Services exists
  //     const existingPost = await Post.findById(Id);
  //     if (!existingPost || existingPost.isDeleted == true) {
  //       return res.status(404).json({ error: "Post not found" });
  //     }

  //     // Update data
  //     Object.assign(existingPost, updates);
  //     await existingPost.save();

  //     return res.status(200).json({
  //       msg: "Post updated successfully",
  //       post: existingPost,
  //     });
  //   } catch (error) {
  //     console.error("Error:", error.message);
  //     return res.status(500).json({ error: "Server Error! --> editProdServ" });
  //   }
  // }

  /**
   * @method deletePost
   * @description Editing the post data
   */
  async deletePost(req, res) {
    try {
      const Id = req.params.id;
      console.log(Id);

      // Validate if the user exists
      const existingPost = await Post.findById(Id);
      if (!existingPost) {
        return res.status(404).json({ error: "Post not found" });
      }

      // Delete the post --> Soft Delete
      const updatedData = await Post.findOneAndUpdate(
        { _id: Id },
        { isDeleted: true },
        { new: true }
      );
      console.log(updatedData);

      if (!updatedData) {
        return res.status(404).json({ error: "Data not found" });
      }

      return res.status(200).json({ msg: "Post deleted successfully" });
    } catch (error) {
      console.error("Error:", error.message);
      return res
        .status(500)
        .json({ error: "Server Error! --> deleteProdServ" });
    }
  }

  /**
   * @method editPost
   * @description Editing the post data (including likes and comments)
   */
  async editPost(req, res) {
    try {
      const postId = req.params.id;
      const { action, comment } = req.body;

      // Validate if the Post exists
      const existingPost = await Post.findById(postId);
      if (!existingPost || existingPost.isDeleted) {
        return res.status(404).json({ error: "Post not found" });
      }

      // Handle different actions (like or comment)
      if (action === "like") {
        // Increment likes
        existingPost.likes += 1;
      } else if (action === "comment") {
        // Add comment
        if (!comment) {
          return res.status(400).json({ error: "Comment text is required" });
        }

        existingPost.comments.push({
          userId: req.user._id,
          text: comment,
        });
      } else {
        return res.status(400).json({ error: "Invalid action" });
      }

      // Save the updated post
      const updatedPost = await existingPost.save();

      return res.status(200).json({
        msg: "Post updated successfully",
        post: updatedPost,
      });
    } catch (error) {
      console.error("Error:", error.message);
      return res.status(500).json({ error: "Server Error! --> editPost" });
    }
  }
}

export default PostController = new PostController();
