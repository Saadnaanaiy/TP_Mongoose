const mongoose = require("mongoose");

const connectionToDatabase = (url) => {
  mongoose
    .connect(url)
    .then(() => console.log(`Connected to Database Successfully!`))
    .catch((err) => console.log(err.message));
};

module.exports = { connectionToDatabase };
