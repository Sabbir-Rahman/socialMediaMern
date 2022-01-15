const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const helmet = require('helmet');
const morgan = require('morgan');
var bodyParser = require('body-parser');

//routes 
const userRoutes = require('./routes/users')
const authRoutes = require('./routes/auth')
const postRoutes = require('./routes/posts')
const uploadRoutes = require('./routes/upload')
const conversationRoutes = require('./routes/conversation')
const messageRoutes = require('./routes/message')

//force path for images
const path = require("path")

dotenv.config()

PORT = 8800
URL = process.env.CONNECTION_URL

mongoose 
 .connect(URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true  })   
 .then(() => console.log("Database connected!"))
 .catch(err => console.log(err));


//cross origin 
app.use((req, res, next) => {
    const allowedOrigins = ['http://localhost:3000'];
    const origin = req.headers.origin;
    if (allowedOrigins.includes(origin)) {
         res.setHeader('Access-Control-Allow-Origin', origin);
    }
    //res.header('Access-Control-Allow-Origin', 'http://127.0.0.1:8020');
    res.header('Access-Control-Allow-Methods', 'GET, OPTIONS, PUT');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.header('Access-Control-Allow-Credentials', true);
    return next();
  });


//go to image path directly
app.use("/images",express.static(path.join(__dirname, "public/images")))

//middleware    
app.use(express.json())
app.use(helmet())
app.use(morgan("common"))
app.use(bodyParser.urlencoded({extended: false}))


app.use("/api/v1/user", userRoutes)
app.use("/api/v1/auth", authRoutes)
app.use("/api/v1/posts", postRoutes)
app.use("/api/v1/upload",uploadRoutes)
app.use("/api/v1/conversations",conversationRoutes)
app.use("/api/v1/messages",messageRoutes)

app.get('/',(req,res) => {
    res.send("Welcome to homepage")
})

app.listen(PORT,()=>{
    console.log(`Backend is running on ${PORT}`);
})