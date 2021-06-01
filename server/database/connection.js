const mongoose = require('mongoose')
const {Pool,Client} = require('pg');
const connectionString = 'mongodb+srv://nikunj:nikunj@cluster0.n5t54.mongodb.net/users?retryWrites=true&w=majority'
 const pool = new Pool({
        connectionString: connectionString,
    })
        var client = new Client({
        user: "nikunj",
        password: "nikunj",
        database: "users",
        port: 5432,
        host: "host",
        ssl: true
    });
    client.connect(function () {
        console.log("connected");
    });
const connectDB = async()=>{
    try {
       const con= await mongoose.connect(connectionString,{useUnifiedTopology:true,useNewUrlParser:true});
       console.log(`mongodb connection ${con.connection.host}`);
    } catch (error) {
        console.log(err);
        process.exit(1);
    }
}

module.exports=connectDB;