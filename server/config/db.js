const mongoose = require('mongoose');

// mongoose funcs returns promises, thats why we use async here
const connectDB = async () => {
  const conn = await mongoose.connect(process.env.MONGO_URI);

  // this line uses the colors package to highlight the log in the terminal
  console.log(`MongoDB Connected: {conn.connection.host}`.cyan.underline.bold);
};

module.exports = connectDB;
