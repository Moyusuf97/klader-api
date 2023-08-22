require('dotenv').config()

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors')



const PORT = process.env.PORT || 3000; 

app.use(express.json());
app.use(cors());
const clothe = require('./Routes/kladerRoutes');
app.use('/clothe', clothe)

mongoose.set("strictQuery", false);
mongoose.connect(
  `mongodb+srv://Mohamed:Mohusby164@native0.7n4nr1k.mongodb.net/?retryWrites=true&w=majority`, 
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  
  
  }, console.log('DB CONN'));

  app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});