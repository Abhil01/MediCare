const mongoose = require("mongoose");
const Connect = async()=>{
      try{
        await mongoose.connect(process.env.MONGO_URL);
        console.log("Database connected");
      }
      catch(err){
          console.log(err.message);
      }
}

module.exports = {Connect};