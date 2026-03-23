const Note = require("../models/notes");

const notes = async (req, res) => {
  try{
    const notes = await Note.find({user: req.userId});
    res.json(notes);
  }catch(err){
    res.status(500).json({message: "Error Fetching notes"})
  }
}

const noteByid = async (req, res) => {
  try{
    let {id} = req.params;
    const note = await Note.findOne({
      _id: id,
      user: req.userId
    })
    res.json(note)
  }catch(err){
    res.status(500).json({message: "Error Fetching single notes by id"})
  }
}

const createNote = async (req, res) => {
    let {title, content} = req.body;
    const newNote = new Note({title, content, user: req.userId});
    await newNote.save();
    res.json(newNote)
}

const updateNote =  async(req, res) => {  
  try{
    let {id} = req.params;
    let {title, content} = req.body;
    const updatedNote = await Note.findOneAndUpdate(
      {_id: id, user: req.userId},
      {title, content}
    )
    res.json(updatedNote);
  }catch(err){
    res.status(500).json({message: "Error due to update the note"})
  }
}

const deleteNote = async(req, res) => {
  try{
    let {id} = req.params;
    const deleteNote = await Note.findOneAndDelete({
      _id: id,
      user: req.userId
    })
    res.json(deleteNote)
  }catch(err){
    res.status(500).json({message: "Error due to delete the note"})
  }
}

module.exports = {
  notes,
  noteByid,
  createNote,
  updateNote,
  deleteNote
}