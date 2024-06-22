const express = require('express');
const mongoose = require('mongoose');
const connectDB = require("./Config/dbconfig");

const hotelDataImportRouter = require("./Routes/dataImport.router");
const categoryDataImportRouter = require("./Routes/categoryImport.router");

const hotelRouter = require("./Routes/hotel.router");
const categoryRouter = require("./Routes/category.router");

const app = express();
const PORT = process.env.PORT || 3050;

mongoose.set('strictQuery', false);

app.use(express.json());
connectDB();

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.use("/api/hoteldata", hotelDataImportRouter);
app.use("/api/categorydata", categoryDataImportRouter);
app.use("/api/hotels", hotelRouter);
app.use("/api/category", categoryRouter);

mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
});


