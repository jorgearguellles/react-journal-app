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
        setNotes: (state, action) => {
            state.notes = action.payload;
        },
        setSaving: (state) => {
            state.isSaving = true;
        },
        noteUpdated: (state, action) => {
            // payload: noteUpdated
            state.isSaving = false;
            state.notes = state.notes.map((note) => {
                if (note.id === action.payload.id) {
                    return action.payload;
                }
                return note;
            });

            // TODO: Show updated message
        },
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
    noteUpdated,
} = journalSlice.actions;
