const express = require("express");
const cors = require("cors");
const { connect } = require("mongoose");
require('dotenv').config();
const upload = require('express-fileupload')


const userRoute = require('./routes/userRoute')
const postRoute = require('./routes/postRoute');
const { notFound, errorHandler } = require("./middleware/errorMiddleware");


const app = express();
app.use(express.json({extended: true}))
app.use(express.urlencoded({extended: true}))
app.use(cors({credentials:true, origin: "http://localhost:3000"}))
app.use(upload())
//directory for file uploads
app.use('/uploads', express.static(__dirname + '/uploads'))

app.use('/api/users', userRoute)
app.use('/api/posts', postRoute)


// notFound && errorHandler 
app.use(notFound)
app.use(errorHandler)


connect(process.env.MONGO_URI)
  .then(
    app.listen(5000, () => console.log(`Server up on port ${process.env.PORT}`))
  )
  .catch((error) => {
    console.log(error);
  });






