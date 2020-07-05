const express= require('express');
const mongoose = require('mongoose');

const app= express();

//Bodyparser Middleware
app.use(express.json());

//Connect to Mongo
mongoose.connect("mongodb://localhost/sportsclub",{ useNewUrlParser: true, useCreateIndex:true,useUnifiedTopology: true})
.then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));

//Use routes
app.use('/api/users',require('./routes/api/users'));
app.use('/api/loginauth',require('./routes/api/loginauth'));


  const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));