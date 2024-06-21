const express = require("express");

const app = express();

const PORT = 3050;

app.get("/", (req, res) => {
    res.send("Hello World");
  });


app.listen(process.env.PORT || PORT, () => {
    console.log("Server running")
})