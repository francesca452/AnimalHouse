import PostModel from "../models/postModel.js";

// creating a post

export const createPost = async (req, res) => {
  const newPost = new PostModel(req.body);

  try {
    await newPost.save();
    res.status(200).json(newPost);
  } catch (error) {
    res.status(500).json(error);
  }
};

// get a post

export const getPost = async (req, res) => {
  const id = req.params.id;

  try {
    const post = await PostModel.findById(id);
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json(error);
  }
};

// update post
export const updatePost = async (req, res) => {
  const postId = req.params.id;
  //const { userId } = req.body;

  try {
    const post = await PostModel.findById(postId);
    //if (post.userId === userId) {
      await post.updateOne({ $set: req.body });
      res.status(200).json("Post updated!");
    // } else {
    //   res.status(403).json("Updated failed");
    // }
  } catch (error) {}
};

// delete a post
export const deletePost = async (req, res) => {
  const id = req.params.id;
  //const { userId } = req.body;

  try {
    const post = await PostModel.findById(id);
    //if (post.userId === userId) {
      await post.deleteOne();
      res.status(200).json("Post deleted.");
    // } else {
    //   res.status(403).json("Action forbidden");
    // }
  } catch (error) {
    res.status(500).json(error);
  }
};


// Get posts
export const getPosts = async (req, res) => {
  try {
    const posts = await PostModel.find({});

    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json(error);
  }
};
