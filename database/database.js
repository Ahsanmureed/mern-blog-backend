import mongoose, { connect } from "mongoose";
const Connection =()=>{
      try {
        const connect = mongoose.connect(process.env.DB_URL);
        console.log("database connected  ");
      } catch (error) {
         console.log(error);
      }
}
export default Connection