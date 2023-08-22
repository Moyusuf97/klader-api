const mongoose = require ('mongoose');


const clotheSchema = mongoose.Schema({

  title: {
      type: String,
      required: true,
    },
  
    price: {
      type: Number,
      required: true,
    },
  
    brand: {
      type: String,
      required: true,
    },
  
    type: {
      type: String,
      required: true
    },

    image: {
      type: String,
    }



});

module.exports = mongoose.model('Clothe' , clotheSchema);

