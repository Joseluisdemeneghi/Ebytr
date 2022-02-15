const mongoose = require("mongoose");

module.exports = async () => {
  const OPTIONS = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };
  await mongoose.connect(
    "mongodb://localhost:27017/todoList",
    OPTIONS
  );
};