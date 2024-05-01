const mongoose = require('mongoose');

// load environment variables
if(process.env.NODE_ENV != 'production'){
    require("dotenv").config();
}


async function connectToDB() {

    try {
        await mongoose.connect(process.env.DB_URL);
        console.log("connected to database succesfully");
    } catch (error) {
        console.log(error);
    }

}

module.exports = connectToDB;