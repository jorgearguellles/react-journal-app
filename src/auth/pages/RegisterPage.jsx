import { Link as RouterLink } from "react-router-dom";
import { Button, Grid, Link, TextField, Typography } from "@mui/material";
import { Google } from "@mui/icons-material";
import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "../../hooks";

const formDataByDefault = {
  email: "jorge@google.com",
  password: "123456",
  displayName: "Jorge Arias",
};

export const RegisterPage = () => {
  const { displayName, email, password, onInputChange, formState } =
    useForm(formDataByDefault);

  const onSubmit = (event) => {
    event.preventDefault();
    console.log("formState:", formState);
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
              required
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
              required
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
              required
            />
          </Grid>

          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
            <Grid item xs={12}>
              <Button variant="contained" fullWidth type="submit">
                Create account
              </Button>
            </Grid>
          </Grid>

          <Grid container direction="row" justifyContent="end">
            <Typography sx={{ mr: 1 }}>¿Already had account?</Typography>
            <Link component={RouterLink} color="inherit" to="/auth/login">
              Sign In
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};
