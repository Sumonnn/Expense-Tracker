const mongoose = require('mongoose');
const url = process.env.URL;

mongoose
    .connect(url,{
        useNewUrlParser:true,
        useCreateIndex:true,
        useUnifiedTopology: true,
        useFindAndModify:false,
    })
    .then(()=>{ console.log('DB Connected'); })
    .catch((err)=>{ console.log(err); })