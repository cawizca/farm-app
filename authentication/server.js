const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require("cors");
const userRouter = require("./routers/UserRouter");
const cookieParser = require("cookie-parser");

const app = express()

mongoose.connect('mongodb://localhost:27017/AgriWeb', {useNewUrlParser: true, useUnifiedTopology: true});

app.use(bodyParser.json());
app.use(cors({
    credentials: true,
    origin: 'http://localhost:3000'
}));
app.use(cookieParser())

app.use('/auth',userRouter);

app.listen(8060,()=>{
    console.log("App is running on port 8060");
})
