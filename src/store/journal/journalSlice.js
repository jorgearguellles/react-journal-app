import { createSlice } from "@reduxjs/toolkit";

export const journalSlice = createSlice({
    name: "journal",
    initialState: {
        isSaving: false,
        messageSaved: "",
        notes: [], // {id: string, title: string, body: string, date: number, imageUrl: arrays }
        activeNote: null,
    },
    reducers: {
        addNewNote: (state, action) => {
            state.notes.push(action.payload);
            state.isSaving = false;
        },
        setActiveNote: (state, action) => {
            state.activeNote = action.payload;
        },
        setNotes: () => {},
        setSaving: () => {},
        updateNote: () => {},
        deleteNoteById: () => {},
        savingNewNote: (state) => {
            state.isSaving = true;
        },
    },
});

export const {
    addNewNote,
    savingNewNote,
    setActiveNote,
    setNotes,
    setSaving,
    updateNote,
} = journalSlice.actions;
