const express = require("express");
const router = express.Router();
const { notes, noteByid, createNote, updateNote, deleteNote } = require("../controllers/noteController.js");
const authMiddleware = require("../middleware/authMiddleware.js");

// Index Route
router.get("/", authMiddleware, notes )

// Getsingle Note
router.get("/:id", authMiddleware, noteByid)

// create route
router.post("/", authMiddleware, createNote)

// updateRoute
router.put("/:id", authMiddleware, updateNote)

// Delete Route
router.delete("/:id", authMiddleware, deleteNote)

module.exports = router