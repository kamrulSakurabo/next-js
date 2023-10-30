import mongoose from "mongoose";
let isConnected = false;
export const connectToDB = async () => {
    mongoose.set('strictQuery', true);

    if (isConnected) {
        console.log('MongoDB is already connected');
        return;
    }
    try {
        await mongoose.connect(process.ecv.MONGODB_URI, {
            dbName: "share_prompt",
            useNewUrlParse: true,
            useUnifiedTopology: true
        })
        isConnected = true;
        console.lo('MOngoDB connected')

    }catch (error) {
        console.log(error);
    }
}