const mongoose = require('mongoose')
const connectDB = async()=>{
    try {
       const con= await mongoose.connect(process.env.MONGO_URL,{useUnifiedTopology:true,useNewUrlParser:true});
       console.log(`mongodb connection ${con.connection.host}`);
    } catch (error) {
        console.log(err);
        process.exit(1);
    }
}

module.exports=connectDB;