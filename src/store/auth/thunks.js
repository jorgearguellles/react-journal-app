import {
    signInWithGoogle,
    signInWithEmailPassword,
    logInWithEmailPassword,
    logOutFirebase,
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
        const result = await signInWithEmailPassword({
            email,
            password,
            displayName,
        });
        if (!result.ok) return dispatch(logout({ errorMessage }));
        dispatch(login(result));
    };
};

export const startEmailPasswordLogIn = ({ email, password }) => {
    return async (dispatch) => {
        dispatch(checkingCredentials());
        const result = await logInWithEmailPassword({
            email,
            password,
        });
        if (!result.ok) return dispatch(logout(result));
        dispatch(login(result));
    };
};

export const startFirebaseLogOut = () => {
    return async (dispatch) => {
        await logOutFirebase();
        dispatch(logout({}));
    };
};
