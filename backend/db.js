const mongoose = require('mongoose');
const mongoURI = "mongodb://127.0.0.1:27017/inotebook";
// const mongoURI = "mongodb://0.0.0.0:27017";


const connectToMongo =  () => {
    mongoose.connect(mongoURI, {
    },)


    .then(() => console.log('Connected Successfully'))

    .catch((err) => {console.log(err); });

    
}

    module.exports = connectToMongo;