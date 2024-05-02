const mongoose = require('mongoose');

// Connect to MongoDB

const connectDB = () => {
    mongoose
    .connect(process.env.MONGO_URL)
    .then(() => {
      console.log("Database connection established");
    })
    .catch((err) => {
      console.log("Error connecting to MongoDB: " + err.message);
    });
}

module.exports = connectDB;
