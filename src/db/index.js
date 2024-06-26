import { mongoose } from "mongoose";

import { DB_NAME } from "../constant.js";

let connectionInstance = null;

const connect_db = async () => {
  try {
    if(connectionInstance === null){
      connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
      console.log(`\n MongoDB connected !! DB Host: ${connectionInstance.connection.host}`);
    }else{
      console.log(`\n MongoDB connected !! DB Host: ${connectionInstance.connection.host}`);
    }
  }catch (error) {
    console.error('MongoDB Connection Error',error);
    process.exit(1);
  }
}

export default connect_db;
