const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

// const connectDB = () => {
//     mongoose.connect(process.env.DATABASE_URI, {
//         useUnifiedTopology: true,
//         useNewUrlParser: true
//     })
// }



const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DATABASE_URI, {
            useUnifiedTopology: true,
            useNewUrlParser: true
        });
        console.log('MongoDB connected successfully');
    } catch (error) {
        console.error('MongoDB connection error:', error);
    }
};

module.exports = connectDB;
