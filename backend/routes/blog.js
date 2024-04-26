import express from "express";
import { createBlog, deleteBlog, getBlog, getBlogs, updateBlog, userBlogs} from "../controller/blogController.js";
import verifyToken from "../middlewares/verifyToken.js";

const blogRouter = express.Router();
blogRouter.post("/create",verifyToken,createBlog);
blogRouter.put("/:id",verifyToken,updateBlog);
blogRouter.delete("/:id",verifyToken,deleteBlog);
blogRouter.get("/user/:userId",userBlogs);
blogRouter.get("/",getBlogs);
blogRouter.get("/:id",getBlog)

export default blogRouter