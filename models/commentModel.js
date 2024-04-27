import mongoose from "mongoose";
const commentSchema = new mongoose.Schema({
  comment:{
    type:String,
    required:true
  },
  author:{
    type:String,
    required:true
  },
  postId:{
    type:String,
    required:true
  },
  userId:{
    type:String,
    required:true
  }
})
export default mongoose.model("Comments",commentSchema)