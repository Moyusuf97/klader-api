const express = require('express');
const router  = express.Router();
const Clothes = require('../models/User')


// get all 



// get post

router.post('/', async (req, res) => {
  const clothe = new Clothes ({
    title: req.body.title,
    price: req.body.price,
    brand: req.body.brand,
    type: req.body.type,
    image: req.body.image

  });
  try {

    const savedClothe = await clothe.save()
    res.json(savedClothe);
    
  } catch (error) {
    res.json({message: error});
    
  }
});


// delete one

router.delete('/:id', async (req,res)=> {
  try {
      const removedClothe = await Clothes.deleteOne({ _id: req.params.id });
      res.json(removedClothe);

  }
  catch(err) {
      res.json({message:err})
  }
});

router.patch('/:id', async (req, res) => {
  try {
    const updatedClothe = await Clothes.updateOne(
      {_id: req.params.id},
      {$set: {title: req.body.title,
        brand: req.body.brand,
        price: req.body.price,
        type: req.body.type,
        image: req.body.image}}) 
        
        res.json(updatedClothe);
    
  } catch (error) {
    res.json({message:err});
    
  }
})

router.get('/', async (req, res) => {
  try {

    const Clothe = await Clothes.find()
    res.json(Clothe)
    
  } catch (error) {
    res.json({message:err})
    
  }
});




  





module.exports = router; 