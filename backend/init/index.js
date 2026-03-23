const mongoose = require("mongoose");
const initData = require("./data.js");
const Note = require("../models/notes");

const MONGO_URL = "mongodb://127.0.0.1:27017/notesapp"

main()
  .then(() => {
    console.log("connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(MONGO_URL);
}

const initDB = async () => {
  await Note.deleteMany({});
  const notesWithUser =  initData.data.map((obj) => ({
    ...obj,
    user: "69b7a5634700b2b844178f83"
  }))
  await Note.insertMany(notesWithUser)
  console.log("data was initialized");
};

initDB()