import mongoose from 'mongoose';

const postMessageSchema = new mongoose.Schema({
  title: {
    type: String,
    trim: true,
  },
  message: String,
  creator: String,
  tags: [String],
  image: String,
  likeCount: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const PostMessage = mongoose.model('PostMeaage', postMessageSchema);

export default PostMessage;
