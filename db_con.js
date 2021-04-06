const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://user:123@cluster0.xogua.mongodb.net/test?retryWrites=true&w=majority',
{ useNewUrlParser: true , useUnifiedTopology: true })
        .then(()=>console.log('mongo is up'))
        .catch((err)=> console.log(`mongo is down, raison : ${err.message}`))