import { use, useState } from "react";
import { useNavigate,useParams } from "react-router";
import { useEffect } from "react";
import api from "../lib/axios";
import toast from "react-hot-toast";
import { ArrowLeftIcon, LucideLoader2, Trash2Icon } from "lucide-react";
import { Link } from "react-router";

const NoteDetailPage = () => {
  const [note, setNote] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const navigate = useNavigate();
  const { id } = useParams();

  const handleDelete = async (e) => {
    e.preventDefault();
    if(!window.confirm("Are you sure you want to delete this note?")) return;

    try {
      await api.delete(`/notes/${id}`);
      toast.success("Note deleted successfully!");
      navigate("/");
    } catch (error) {
      console.error("Error deleting note:", error);
      toast.error("Failed to delete note.");
    }finally{
      setLoading(false);
    }
  }

  const handleSave = async (e) => {
    if(!note.title.trim() || !note.content.trim()) {
      toast.error("Title and content are required.");
      return;
    }
    setSaving(true);
    try {
      await api.put(`/notes/${id}`, note);
      toast.success("Note updated successfully!");
      navigate("/");
    } catch (error) {
      console.error("Error updating note:", error);
      toast.error("Failed to update note.");
    } finally {
      setSaving(false);
    }
  }

  useEffect(() => {
    const fetchNote = async () => {
      try {
        const response = await api.get(`/notes/${id}`);
        setNote(response.data);
      } catch (error) {
        console.error("Error fetching note:", error);
        toast.error("Failed to fetch note.");
      } finally {
        setLoading(false);
      }
    };

    fetchNote();
  }, [id]);

if (loading){
    return(
      <div className="min-h-screen flex items-center justify-center h-screen">
        <LucideLoader2 className="animate-spin size-10" />
      </div>
    )
}
return (
  <div className="min-h-screen bg-base-200">
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <Link to="/" className="btn btn-ghost mb-5">
        <ArrowLeftIcon className="size-5" />
          Back to Notes
        </Link>
        <button onClick={handleDelete} className="btn btn-error btn-outline">
          <Trash2Icon className="size-5" />
          Delete Note
        </button>
      </div>
      <div className="card bg-base-100">
            <div className="card-body">
              <div className="form-control mb-4">
                <label className="label">
                  <span className="label-text">Title</span>
                </label>
                <input
                  type="text"
                  placeholder="Note title"
                  className="input input-bordered"
                  value={note.title}
                  onChange={(e) => setNote({ ...note, title: e.target.value })}
                />
              </div>

              <div className="form-control mb-4">
                <label className="label">
                  <span className="label-text">Content</span>
                </label>
                <textarea
                  placeholder="Write your note here..."
                  className="textarea textarea-bordered h-32"
                  value={note.content}
                  onChange={(e) => setNote({ ...note, content: e.target.value })}
                />
              </div>

              <div className="card-actions justify-end">
                <button className="btn btn-primary" onClick={handleSave}>
                  {saving? "Saving...":"Save Changes"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};
export default NoteDetailPage;

