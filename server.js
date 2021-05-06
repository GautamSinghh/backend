const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const path = require('path');
const bodyParser = require('body-parser');
const hbs = require("hbs");


const connectDB = require("./db/conn");
connectDB();
const Register = require("./models/register");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("views", path.join(__dirname, "./views"));
app.set("view engine", "hbs");


app.get("/", function (req, res) {
    res.render("home");
  });

app.get("/blog", function (req, res) {
    res.render("blog");
  });

app.get("/testimonials", function (req, res) {
    res.render("testimonials");
  });
//testimonials//

// app.post("/blog", async (req, res) => {
//     try{
//      const discrition = req.body.discrition;
//      const img = req.body.img;
//      const fullname = req.body.fullname;
//      const position = req.body.position;
//      if(blog && discrition && img && number){
//          const registerEmployee = new Register({
//              blog: req.body.blog,
//              discrition: req.body.discrition,
//              img: req.body.img,
//              number: req.body.number
//            });
       
//          const registere = await registerEmployee.save();
//      }else{
//          console.log('blog no added')
//      }
//     }catch (error) {
//      res.status(400).send("incompleted");
//    }
//    });

  //blog post//

  app.post("/blog", async (req, res) => {
   try{
    const blog = req.body.blog;
    const discrition = req.body.discrition;
    const img = req.body.img;
    const number = req.body.number;
    if(blog && discrition && img && number){
        const registerEmployee = new Register({
            blog: req.body.blog,
            discrition: req.body.discrition,
            img: req.body.img,
            number: req.body.number
          });
      
        const registere = await registerEmployee.save();
    }else{
        console.log('blog no added')
    }
   }catch (error) {
    res.status(400).send("incompleted");
  }
  });












app.listen(port, (req,res) =>{
    console.log(`port is working on ${port}`)
})