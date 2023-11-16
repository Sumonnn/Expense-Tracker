const mongoose = require('mongoose');
const url = process.env.URL;

mongoose
    .connect(url,{
        useUnifiedTopology: true,
    })
    .then(()=>{ console.log('DB Connected'); })
    .catch((err)=>{ console.log(err); })