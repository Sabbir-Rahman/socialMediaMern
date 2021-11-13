const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const helmet = require('helmet');
const morgan = require('morgan');

//routes 
const userRoutes = require('./routes/users')
const authRoutes = require('./routes/auth')
const postRoutes = require('./routes/posts')

dotenv.config()

PORT = 8800
URL = process.env.CONNECTION_URL

mongoose 
 .connect(URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true  })   
 .then(() => console.log("Database connected!"))
 .catch(err => console.log(err));

//middleware
app.use(express.json())
app.use(helmet())
app.use(morgan("common"))

app.use("/api/v1/user", userRoutes)
app.use("/api/v1/auth", authRoutes)
app.use("/api/v1/posts", postRoutes)

app.get('/',(req,res) => {
    res.send("Welcome to homepage")
})

app.listen(PORT,()=>{
    console.log(`Backend is running on ${PORT}`);
})