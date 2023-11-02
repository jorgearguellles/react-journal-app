import {
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signInWithPopup,
    updateProfile,
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

export const signInWithEmailPassword = async ({
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

        // A way to know current User Authenticated -> FirebaseAuth.currentUser
        await updateProfile(FirebaseAuth.currentUser, { displayName });

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

export const logInWithEmailPassword = async ({ email, password }) => {
    try {
        const resp = await await signInWithEmailAndPassword(
            FirebaseAuth,
            email,
            password
        );
        const { uid, displayName, photoURL } = resp.user;

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
