const mongoose = require('mongoose');

const mongoURI = "mongodb+srv://monson:Mrv0606@2002@student.wq2abnu.mongodb.net/?retryWrites=true&w=majority"

const connectToMongo = () => {
    mongoose.set('strictQuery', false);
    mongoose.connect(mongoURI, () => {
        console.log("Connected Successfully");
    })
}

module.exports = connectToMongo;