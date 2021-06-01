const express = require('express');
const app = express();
const pg = require('pg');
const dotenv = require('dotenv');
const morgen = require('morgan');
const morgan = require('morgan');
const path = require('path')
const bodyparser = require('body-parser');
const connectDB = require('./server/database/connection');
dotenv.config({path:'.env'})

const PORT = process.env.PORT || 8000;
// Log Request
app.use(morgan('tiny'))
// Pass request to body parser
app.use(bodyparser.urlencoded({extended:true}))
// Db
connectDB();


//Set view Engine
app.set('view-engine','ejs')

app.use('/css',express.static(path.resolve(__dirname,'assets/css')))
app.use('/img',express.static(path.resolve(__dirname,'assets/img')))
app.use('/js',express.static(path.resolve(__dirname,'assets/js')))


// Routes
app.use('/',require('./server/routes/router'))

app.listen(PORT,()=>{
    console.log(`servering is listening on ${PORT}`);
})