import {
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithPopup,
} from "firebase/auth";
import { FirebaseAuth } from "./config";

const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
    try {
        const result = await signInWithPopup(FirebaseAuth, googleProvider);
        const { displayName, email, photoURL, uid } = result.user;
        return {
            ok: true,
            displayName,
            email,
            uid,
            photoURL,
        };
    } catch (error) {
        const { errorMessage, errorCode } = error;
        return { ok: false, errorCode, errorMessage };
    }
};

export const signInWithUserAndPassword = async ({
    email,
    password,
    displayName,
}) => {
    try {
        const resp = await createUserWithEmailAndPassword(
            FirebaseAuth,
            email,
            password
        );
        const { uid, photoURL } = resp.user;
        console.log({ resp });
        return {
            ok: true,
            displayName,
            email,
            uid,
            photoURL,
        };
    } catch (error) {
        return { ok: false, errorMessage: error.message };
    }
};
