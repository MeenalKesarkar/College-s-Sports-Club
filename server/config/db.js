const mongoose = require("mongoose");

const conncetDB = async () => {
    try {
        const conn = await  mongoose.connect(process.env.MONGO.URI);

        console.log(`MongoDB Connected: ${conn.connection.host}`);
    }
    catch(error){
        console.log(error.message);
        process.exit(1);
    }
};

module.exports = conncetDB;