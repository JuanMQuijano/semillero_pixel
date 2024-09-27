import mongoose from "mongoose"

const dbConnect = async () => {

    try {
        await mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.09kjd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`)

        console.log("DB conectada")

    } catch (error) {
        console.error(error);
        process.exit(-1)
    }

}

export default dbConnect