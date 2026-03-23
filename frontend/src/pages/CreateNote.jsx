import React, { useState } from 'react'
import { createNote } from "../api/notesApi";
import { useNavigate } from 'react-router-dom';

function CreateNote() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const notedata = {
      title, content
    }
    try{
      await createNote(notedata)
      navigate("/")
      setTitle("")
      setContent("")
    }catch(err){
      console.log(err);
    }
  }

  return ( 
    <form onSubmit={handleSubmit}>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-50 via-purple-50 to-blue-50">

    <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-xl">

      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
        Create Note
      </h1>

    <input
      type="text"
      placeholder="Title"
      value={title}
      onChange={(e) => setTitle(e.target.value)}
      className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-400"
    />

    <textarea
      placeholder="Content"
      rows="5"
      value={content}
      onChange={(e) => setContent(e.target.value)}
      className="w-full border border-gray-300 rounded-lg p-3 mt-4 focus:outline-none focus:ring-2 focus:ring-indigo-400"
    />

    <button type="submit" className="mt-6 w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition">
      Add Note
    </button>

  </div>

</div>
    </form>
  )
}

export default CreateNote
