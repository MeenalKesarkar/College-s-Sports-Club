import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URI, {
            dbName: "SportsClubDatabase"
        });

        console.log(`MongoDB Connected: ${conn.connection.host}`);
        console.log(`Database: ${conn.connection.db.databaseName}`);
    } catch (error) {
        console.log(error.message);
        process.exit(1);
    }
};

export default connectDB;