import {
  Avatar,
  Button,
  TextField,
  FormControlLabel,
  Checkbox,
  Link,
  Paper,
  Box,
  Grid,
  Alert,
  Typography,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

export default function SignInSide() {
  const [email, setEmail] = useState<string | null>("");
  const [password, setPassword] = useState<string>("");
  const [emailError, setEmailError] = useState<boolean>(false);
  const [passwordError, setPasswordError] = useState<boolean>(false);
  const [remember, setRemember] = useState<boolean | (null & boolean)>(true);

  useEffect(() => {
    window.localStorage.setItem("remember", JSON.stringify(remember));
    if (localStorage.getItem("email")) {
      setEmail(localStorage.getItem("email"));
    }
    if (localStorage.getItem("remember") === null) {
      setRemember(false);
    }
  }, [email, remember]);

  if (remember === false) {
    localStorage.removeItem("email");
  }

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (remember) {
      localStorage.setItem("email", email as string);
    }

    axios({
      method: "post",
      url: `${process.env.REACT_APP_API_URL}api/user/login`,
      withCredentials: true,
      data: {
        email,
        password,
      },
    })
      .then((res) => {
        window.location.href = "/";
      })
      .catch((err) => {
        err.response.data.errors.email
          ? setEmailError(true)
          : setEmailError(false);
        err.response.data.errors.password
          ? setPasswordError(true)
          : setPasswordError(false);
      });
  };

  return (
    <div className="h-screen">
      {emailError && (
        <Alert severity="error" className="text-center">
          Oups ! Your email doesn&apos;t exist !
        </Alert>
      )}

      {passwordError && (
        <Alert severity="error" className="text-center">
          Oups ! Wrong password !
        </Alert>
      )}
      <Grid container component="main" sx={{ height: "100%" }}>
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 12,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
              <FontAwesomeIcon icon={faUser} />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleLogin}
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                autoComplete="current-password"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    value={remember}
                    color="primary"
                    onClick={() => setRemember(!remember)}
                    checked={remember}
                  />
                }
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="/signup" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage:
              "url(./images/header/medium/header-signin-medium.jpg)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      </Grid>
    </div>
  );
}
