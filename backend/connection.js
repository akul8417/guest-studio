const mongoose = require('mongoose');
const url = 'mongodb+srv://akulkushw66217:akul66217@cluster0.fb7lmpy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

mongoose.connect(url)
    .then((result) => {
        console.log('database connected');
    }).catch((err) => {
        console.log(err);
    });
module.exports = mongoose;
