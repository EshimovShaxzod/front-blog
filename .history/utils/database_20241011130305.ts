import mongoose from 'mongoose'


let isConnected = false // ulanishni kuzatib boring

export const connectToDB = async  () => {
    mongoose.set('strictQuery', true)

    if(isConnected) {
        console.log('MongoDB is already connected') 
        return;
    }

    const MONGODB_URI = mongodb+srv://shoxdeveloper2425:ulNbKqxwBkSZMrUK@ecommerce-backend.adqnw.mongodb.net/?retryWrites=true&w=majority&appName=ecommerce-backend

    try {
        await mongoose.connect(process.env.MONGODB_URI as string, {
            dbName: 'ecommerce-backend',
        })

        isConnected = true
        console.log('MongoDB connected')
    } catch (error) {
        console.log(error); 
    }
}