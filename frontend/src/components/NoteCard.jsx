import { Link } from 'react-router';
import { PenSquareIcon,Trash2Icon } from 'lucide-react';
import { formatDate } from '../lib/utils';
import api from '../lib/axios';
import toast from 'react-hot-toast';

const NoteCard = ({ note,setNotes }) => {

  const handleDelete = async (e,id) => {
    e.preventDefault();
    if(!window.confirm("Are you sure you want to delete this note?")) return;
    try {
        await api.delete(`/notes/${id}`);
        setNotes((prevNotes) => prevNotes.filter(note => note._id !== id));
        toast.success("Note deleted successfully!");
    } catch (error) {  
        console.error("Error deleting note:", error);
        toast.error("Failed to delete note.");
    }finally {}

  }

  return <Link to={`/note/${note._id}`}
  className='card bg-base-100 hover:shadow-lg transition-shadow-all duration-200 border-t-4 border-solid border-[#00FF0D]'>
    <div className='card-body'>
        <h2 className='card-title text-base-content'>{note.title}</h2>
        <p className='text-base-content/70 line-clamp-3'>{note.content}</p>
        <div className='card-actions justify-between'>
            <span className='text-sm text-base-content/60'>
                {formatDate(new Date(note.createdAt))}
            </span>
            <div className='flex items-center gap-1'>
                <PenSquareIcon className='size-4' />
                <button className='btn btn-ghost btn-xs text-error' onClick={(e)=>handleDelete(e,note._id)}>
                    <Trash2Icon className='size-4' />
                </button>
            </div>
        </div>
    </div>
  </Link>
}

export default NoteCard
