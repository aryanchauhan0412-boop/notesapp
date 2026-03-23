import React, {useEffect, useState} from 'react';
import { getNotes } from '../api/notesApi';
import NoteCard from '../components/NoteCard';
import { useNavigate } from "react-router-dom";

function Home() {
  const [notes, setNotes] = useState([]);
  const [search, setSearch] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/login");
      return;
    }

    async function fetchNotes(){
      try{
        const res = await getNotes();
        setNotes(res.data);
      }catch(err){
        console.log(err);
      }
    }

    fetchNotes();

  }, [navigate]);

  
  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-50 via-purple-50 to-blue-50 p-8">
    <div className="text-center mb-10">
      <h1 className="text-5xl font-bold leading-normal text-center bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">
        My Notes Manager
      </h1>
      <input
        type="text"
        placeholder="Search notes..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-60 max-w-md p-3 mb-6 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
      />

      <div className="grid grid-cols-3 gap-6 mt-8">
      {notes.filter((note) => 
          note.title.toLowerCase().includes(search.toLowerCase()) ||
          note.content.toLowerCase().includes(search.toLowerCase()))
      .map((note) => (
        <NoteCard key={note._id} note={note} />
      ))}
    </div>
    </div>
   </div>
  )
}

export default Home
