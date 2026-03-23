import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from "@mui/material/Box";
import {Link} from "react-router-dom"
import { deleteNote } from '../api/notesApi';
import Button from "@mui/material/Button";

function NoteCard({ note }) {
  const handleDelete = async() => {
     const confirmDelete = window.confirm("⚠️ Are you sure you want to delete this note?");

    if (!confirmDelete) return;

    try{
      await deleteNote(note._id)
      window.location.reload();
    }catch(err){
      console.log(err);
      
    }
  }
  return (
    <div className="bg-white rounded-xl shadow-md p-6 text-center border border-gray-100 hover:shadow-xl transition duration-300">
    <Card sx={{ maxWidth: 345, margin: 2 }}>

      <Box sx={{ display: "flex", flexDirection: "column" }}>
      <CardContent>
        <Typography variant="h5">
          {note.title}
        </Typography>

        <Typography variant="body2">
          {note.content}
        </Typography>
        <p className="text-sm text-400">
          <b>Created: </b> 
          {new Date(note.createdAt).toLocaleDateString()}
          
          {/* {new Date(note.updatedAt).toLocaleDateString()} */}
        </p>
        <Link to={`/edit/${note._id}`}>
          <button className="text-indigo-600 font-semibold hover:underline">
            Edit Note
          </button>
        </Link>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Button
          variant="contained"
          color="error"
          onClick={handleDelete}
          className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition">
          DELETE
        </Button>
        

      </CardContent>
      </Box>
    </Card>
    </div>
  );
}

export default NoteCard;