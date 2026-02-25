import mongoose from 'mongoose'

const dbConnection = async ()=>{
    try {
        const connection = await mongoose.connect(process.env.MONGO_URI);
        console.log(
            "MongoDB ID",connection.connection.host,connection.connection.name);
    } catch (error) {
        console.log("DB connection Failed",error);
        process.exit(1);
    }
}

export default dbConnection