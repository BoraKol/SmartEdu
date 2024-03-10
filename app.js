const express = require("express");
const pageRoute= require('./routes/pageRoute');
const app = express();

//Template engine
app.set('view engine',"ejs");

//Middleware
app.use(express.static("public"));

const port = 3000;

//Routes
app.use('/' , pageRoute);

// app.get("/about" , (req,res) =>{
//   res.status(200).render("about" , {
//     page_name: "about"
//   });
// })



app.listen(port, () => {
  console.log(`App started on port ${port}`);
});
