const mongoose = require('mongoose');

const connectDB = async() => {
    try {
        const connection = await mongoose.connect(process.env.MONGO_URL);
        console.log(`Connect to MongoDB ${connection.connection.host}`);
    } catch (error) {
        console.log('Nepavyko prisijungti ', error)
    }
}

module.exports = connectDB;