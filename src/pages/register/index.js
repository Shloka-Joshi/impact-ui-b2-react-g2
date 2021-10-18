import "../../styles/common-style.css";
import * as React from "react";
import { Avatar } from "../../utils/mui";
import { Button } from "../../utils/mui";
import { CssBaseline } from "../../utils/mui";
import { TextField } from "../../utils/mui";
import { Grid } from "../../utils/mui";
import { Box } from "../../utils/mui";
import { Link as RouterLink } from "react-router-dom";
import { Typography } from "../../utils/mui";
import { Container } from "../../utils/mui";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { registerUser } from "../../redux/actions/auth-action-creator";
import { connect } from "react-redux";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

const theme = createTheme();

function SignUp({ registerUser, data }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    data.append("role", "patient");
    let body = {};
    for (let entry of data.entries()) {
      body[entry[0]] = entry[1];
    }
    registerUser(body);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "#1976d2" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="first-name"
                  name="firstName"
                  label="First Name"
                  autoComplete="off"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="lastName"
                  name="lastName"
                  label="Last Name"
                  autoComplete="off"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="dob"
                  name="dob"
                  type="date"
                  autoComplete="off"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  name="email"
                  label="Email Address"
                  type="email"
                  autoComplete="on"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="contact"
                  name="contact"
                  label="Contact"
                  type="tel"
                  autoComplete="off"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="password"
                  name="password"
                  label="Password"
                  type="password"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="password"
                  name="password"
                  label="Re-Type Password"
                  type="password"
                />
              </Grid>
            </Grid>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>

            <Grid container justifyContent="flex-end">
              <Grid item>
                <RouterLink variant="body2" to="/login">
                  Already have an account? Sign in
                </RouterLink>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

const mapStateToProps = (state) => {
  return {
    data: state.data,
  };
};

const mapdispatchToProps = (dispatch) => {
  return {
    registerUser: (data) => dispatch(registerUser(data)),
  };
};

export default connect(mapStateToProps, mapdispatchToProps)(SignUp);
