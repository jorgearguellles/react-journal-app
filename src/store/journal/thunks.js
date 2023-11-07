import { collection, doc, setDoc } from "firebase/firestore/lite";

import { FirebaseDB } from "../../firebase/config";

export const startNewNote = () => {
    return async (dispatch, getState) => {
        const { uid } = getState().auth;
        const newNote = {
            title: "Title example",
            body: "Body example",
            date: new Date().getTime(),
        };
        const newDoc = doc(collection(FirebaseDB, `${uid}/journal/notes`));
        await setDoc(newDoc, newNote);
    };
};
