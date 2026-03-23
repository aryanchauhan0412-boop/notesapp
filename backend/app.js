const express = require("express");
const app = express();
const mongoose = require("mongoose")
const dotenv = require("dotenv");
const MONGO_URL = "mongodb://127.0.0.1:27017/notesapp"
const Note = require("./models/notes");
const path = require("path");
const methodOverride = require("method-override");
const cors = require("cors");

const noteRouter = require("./routes/notesRoutes");
const userRouter = require("./routes/userRoutes")

main()
.then(() => console.log("connection successfully"))
.catch(err => console.log(err));

async function main() {
  await mongoose.connect(MONGO_URL);

}

app.use(cors({
  origin: "http://localhost:5173",
  allowedHeaders: ["Content-Type", "Authorization"]
}));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

app.use("/notes", noteRouter);
app.use("/", userRouter)



// async function test() {
//   const note = new Note({
//     title: "First Note",
//     content: "This is my first note"
//   });

//   await note.save();
//   console.log("Note saved");
// }

// test();

app.get("/" , (req, res) => {
  res.send("Hello")
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`server is running on port : ${PORT}`);
})