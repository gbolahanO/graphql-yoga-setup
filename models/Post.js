import { Sequelize } from 'sequelize'
import sequelize from '../db/sequelize'

const Post = sequelize.define('post', {
  title: {
    type: Sequelize.STRING
  },
  slug: {
    type: Sequelize.STRING
  },
  post_image: {
    type: Sequelize.STRING
  },
  content: {
    type: Sequelize.STRING
  },
  createdAt: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW
  }
});

export default Post;