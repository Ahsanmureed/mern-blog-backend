import mongoose from "mongoose";
const blogSchema = new mongoose.Schema({
  title:{
    type:String,
    required:true
  },
  description:{
    type:String,
    required:true
  },
  photo:{
    type:String,
    required:false
  },
  
  username:{
    type:String,
    required:true,  
},
userId:{
    type:String,
    required:true,  
},
  categories:{
    type:Array
  },
},{timestamps:true})
export default mongoose.model("Blogs",blogSchema)