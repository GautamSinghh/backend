const mongoose = require("mongoose");


const employeeSchema = new mongoose.Schema({
    blog: {
      type: String,
      required: true
    },
    discrition: {
      type: String,
      required: true
    },
    number: {
      type: Number,
      required: true
    }
    ,
    img: {
      data: Buffer, 
      contentType: String
    }
})

//testimonials//

const testimonialsSchema = new mongoose.Schema({
  discrition: {
    type: String,
    required: true
  },
  img: {
    data: Buffer, 
    contentType: String
  },
      fullname: {
        type: String,
        required: true
    },
     position: {
          type: String,
          required: true
       }
  
})

const Testimonials = new mongoose.model("Testimonials", testimonialsSchema);
module.exports = Testimonials;


const Register = new mongoose.model("Register", employeeSchema);
module.exports = Register;


// const Testimonials = new mongoose.model("Testimonials", employeeSchema);
// module.exports = Testimonials;


// 
// 