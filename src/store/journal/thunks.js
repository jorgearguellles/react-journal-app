import { collection, doc, setDoc } from "firebase/firestore/lite";

import { FirebaseDB } from "../../firebase/config";
import { addNewNote, setActiveNote, savingNewNote } from "./journalSlice";

export const startNewNote = () => {
    return async (dispatch, getState) => {
        dispatch(savingNewNote());

        const { uid } = getState().auth;
        const newNote = {
            title: "Title example",
            body: "Body example",
            date: new Date().getTime(),
        };
        const newDoc = doc(collection(FirebaseDB, `${uid}/journal/notes`));
        await setDoc(newDoc, newNote);
        newNote.id = newDoc.id;

        dispatch(addNewNote(newNote));
        dispatch(setActiveNote(newNote));
    };
};
