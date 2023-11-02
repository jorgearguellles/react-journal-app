import { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link as RouterLink } from "react-router-dom";
import {
    Alert,
    Button,
    Grid,
    Link,
    TextField,
    Typography,
} from "@mui/material";

import { startRegisteringUserWithEmailPassword } from "../../store/auth";
import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "../../hooks";

const formDataByDefault = {
    email: "jorge@google.com",
    password: "123456",
    displayName: "Jorge Arias",
};

const formValidations = {
    email: [(value) => value.includes("@"), "Email must had @"],
    password: [
        (value) => value.length >= 6,
        "Password must longer than 6 characters",
    ],
    displayName: [
        (value) => value.length >= 1,
        "DisplayName must longer than 1 character",
    ],
};

export const RegisterPage = () => {
    const dispatch = useDispatch();
    const [formSubmitted, setFormSubmitted] = useState(false);
    const {
        displayName,
        email,
        password,
        onInputChange,
        formState,
        displayNameValid,
        emailValid,
        passwordValid,
        isFormValid,
    } = useForm(formDataByDefault, formValidations);
    const { status, errorMessage } = useSelector((state) => state.auth);
    let isCheckingAuthentication = useMemo(
        () => status === "checking",
        [status]
    );

    const onSubmit = (event) => {
        event.preventDefault();
        setFormSubmitted(true);
        if (!isFormValid) return;
        dispatch(startRegisteringUserWithEmailPassword(formState));
    };

    return (
        <AuthLayout title="Create account">
            <form onSubmit={onSubmit}>
                <Grid container>
                    <Grid item xs={12} sx={{ mt: 2 }}>
                        <TextField
                            label="Full name"
                            type="text"
                            placeholder="Full name"
                            fullWidth
                            name="displayName"
                            value={displayName}
                            onChange={onInputChange}
                            error={!!displayNameValid && formSubmitted}
                            helperText={displayNameValid}
                        />
                    </Grid>

                    <Grid item xs={12} sx={{ mt: 2 }}>
                        <TextField
                            label="Email"
                            type="email"
                            placeholder="correo@google.com"
                            fullWidth
                            name="email"
                            value={email}
                            onChange={onInputChange}
                            error={!!emailValid && formSubmitted}
                            helperText={emailValid}
                        />
                    </Grid>

                    <Grid item xs={12} sx={{ mt: 2 }}>
                        <TextField
                            label="Password"
                            type="password"
                            placeholder="Password"
                            fullWidth
                            name="password"
                            value={password}
                            onChange={onInputChange}
                            error={!!passwordValid && formSubmitted}
                            helperText={passwordValid}
                        />
                    </Grid>

                    <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
                        <Grid
                            item
                            xs={12}
                            display={!!errorMessage ? "" : "none"}
                        >
                            <Alert severity="error">{errorMessage}</Alert>
                        </Grid>
                        <Grid item xs={12}>
                            <Button
                                variant="contained"
                                fullWidth
                                type="submit"
                                disabled={isCheckingAuthentication}
                            >
                                Create account
                            </Button>
                        </Grid>
                    </Grid>

                    <Grid container direction="row" justifyContent="end">
                        <Typography sx={{ mr: 1 }}>
                            ¿Already had account?
                        </Typography>
                        <Link
                            component={RouterLink}
                            color="inherit"
                            to="/auth/login"
                        >
                            Sign In
                        </Link>
                    </Grid>
                </Grid>
            </form>
        </AuthLayout>
    );
};
