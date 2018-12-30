import User from '../models/User'
import Post from '../models/Post'
const Mutation = {
  createPost: async (_, { data }, ctx, info) => {
    let post = await Post.create(data);
    return post;
  },
  createUser: (_, args, ctx, info) => {
    console.log(args)
  }
}

export default Mutation