import User from '../models/User'
import Post from '../models/Post'

const Query = {
  getAllPost: async (_, args, ctx, info) => {
    const posts = await Post.findAll();
    return posts
  }
}

export default Query