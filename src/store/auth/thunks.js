import {
    signInWithGoogle,
    signInWithEmailAndPassword,
} from "../../firebase/providers";
import { checkingCredentials, login, logout } from "./";

export const checkingAuthentication = () => {
    return async (dispatch) => {
        dispatch(checkingCredentials());
    };
};

export const startGoogleSignIn = () => {
    return async (dispatch) => {
        dispatch(checkingCredentials());
        const result = await signInWithGoogle();
        if (!result.ok) return dispatch(logout(result.errorMessage));
        dispatch(login(result));
    };
};

export const startRegisteringUserWithEmailPassword = ({
    email,
    password,
    displayName,
}) => {
    return async (dispatch) => {
        dispatch(checkingCredentials());
        const result = await signInWithEmailAndPassword({
            email,
            password,
            displayName,
        });
    };
};
