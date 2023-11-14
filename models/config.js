const mongoose = require('mongoose');
const url = process.env.URL;

mongoose
    .connect(url)
    .then(()=>{ console.log('DB Connected'); })
    .catch((err)=>{ console.log(err); })