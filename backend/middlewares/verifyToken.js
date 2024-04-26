import jwt from "jsonwebtoken"
const verifyToken =(req,res,next)=>{
     const token = req.cookies.token;
     if(!token){
      return res.status(401).json({
        success:false,
        message:"You are not authenticated Person"
      })
     }
     jwt.verify(token,process.env.TOKEN_SECRET_KEY,(err,data)=>{
      if(err){
        return res.status(403).json({
          success:false,
          message:"Token is invalid"
        })
       }
       req.userId = data._id
       next();
     });
     
}
export default verifyToken;