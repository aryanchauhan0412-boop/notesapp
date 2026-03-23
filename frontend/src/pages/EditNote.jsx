import React, { useEffect , useState} from 'react'
import { getNoteById, updateNote } from '../api/notesApi';
import { useNavigate, useParams } from 'react-router-dom';

function EditNote() {
  const { id } = useParams();

  const [title,setTitle] = useState("");
  const [content,setContent] = useState("");
  const navigate = useNavigate()

  useEffect(() => {
    async function fetchNote(){
      const res = await getNoteById(id);
      setTitle(res.data.title);
      setContent(res.data.content);
    }
    fetchNote()
  },[id])

  const handleSubmit = async (e) => {
      e.preventDefault();
  
      const updatenotedata = {
        title, content
      }
      
      await updateNote(id, updatenotedata)
      navigate("/")
    }


  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-50 via-purple-50 to-blue-50">

  <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-xl">

    <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
      Edit Note
    </h1>

    <input
      type="text"
      value={title}
      onChange={(e) => setTitle(e.target.value)}
      className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-400"
      placeholder="Enter title"
    />

    <textarea
      value={content}
      onChange={(e) => setContent(e.target.value)}
      className="w-full border border-gray-300 rounded-lg p-3 mt-4 focus:outline-none focus:ring-2 focus:ring-indigo-400"
      rows="4"
      placeholder="Enter content"
    />

    <button onClick={handleSubmit} className="mt-6 w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition">
      Update Note
    </button>

  </div>

</div>
  )
}

export default EditNote
