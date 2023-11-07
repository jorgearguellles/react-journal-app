import { createSlice } from "@reduxjs/toolkit";

export const journalSlice = createSlice({
    name: "journal",
    initialState: {
        isSaving: true,
        messageSaved: "",
        notes: [], // {id: string, title: string, body: string, date: number, imageUrl: arrays }
        activeNote: null,
    },
    reducers: {
        addNewNote: () => {},
        setActiveNote: () => {},
        setNotes: () => {},
        setSaving: () => {},
        updateNote: () => {},
        deleteNoteById: () => {},
    },
});

export const { addNewNote, setActiveNote, setNotes, setSaving, updateNote } =
    journalSlice.actions;
