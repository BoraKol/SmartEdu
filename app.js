const express = require("express");
const mongoose = require("mongoose");
const pageRoute= require('./routes/pageRoute');
const courseRoute= require('./routes/courseRoute');

const app = express();

//Connect DB

mongoose.connect('mongodb://localhost/smartedu-db' , {
  useNewUrlParser:true,
  useUnifiedTopology:true,
  useFindAndModify:true,
  useCreateIndex:true,
}).then(() => {
  console.log('DB connected successfully');
});

//Template engine
app.set('view engine',"ejs");

//Middleware
app.use(express.static("public"));

const port = 3000;

//Routes
app.use('/' , pageRoute);
app.use('/courses' , courseRoute);

// app.get("/about" , (req,res) =>{
//   res.status(200).render("about" , {
//     page_name: "about"
//   });
// })



app.listen(port, () => {
  console.log(`App started on port ${port}`);
});
