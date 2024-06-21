const express = require('express');
const mongoose = require('mongoose');
const connectDB = require("./Config/dbconfig");

const hotelRouter = require("./Routes/hotel.router");
const hotelDataImportRouter = require("./Routes/dataImport.router");

const app = express();
const PORT = process.env.PORT || 3050;

mongoose.set('strictQuery', false);

app.use(express.json());
connectDB();

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.use("/api/hoteldata", hotelDataImportRouter);
app.use("/api/hotels", hotelRouter);

mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
});


