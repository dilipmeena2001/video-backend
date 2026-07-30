import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectionString = `${process.env.MONGODB_URI}/${DB_NAME}`


const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${connectionString}`)
        console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`)
    } catch (error) {
        console.log("MONGODB connection error: ", error)
        process.exit(1)
    }
}

export default connectDB