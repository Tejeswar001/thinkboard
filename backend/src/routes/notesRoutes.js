import express from 'express';
import { getAllNotes, getNoteById, createNote, deleteNote, updateNote } from '../controllers/notesControllers.js';

const router = express.Router();

router.get("/", getAllNotes);

router.get("/:id", getNoteById);

router.post("/", createNote);

router.put("/:id", updateNote);

router.delete("/:id", deleteNote);
export default router;