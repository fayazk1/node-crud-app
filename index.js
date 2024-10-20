const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product.model.js");
const productRoute = require("./routes/product.route.js");
const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes

app.use("/api/products", productRoute);

app.get("/", function (req, res) {
  res.send("server ok 3000");
});

mongoose
  .connect(
    "mongodb+srv://faydeemuhammed:x5BR9PrHB6XnniUF@nodelearning.ezcnb.mongodb.net/Node-API?retryWrites=true&w=majority&appName=nodeLearning"
  )
  .then(() => {
    console.log("Connected!");
    app.listen(3000, () => {
      console.log(`server is run in ${"http://localhost:3000/"}`);
    });
  })
  .catch(() => console.log("Connection Failed"));
