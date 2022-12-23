import { MouseEvent, useState } from "react";
import { useHistory } from "react-router-dom";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { serverLogin } from "../../api";
import { useAuth } from "../../context";

export function Login() {
  const history = useHistory();
  const { login } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string>();
  const [emailHelperText, setEmailHelperText] = useState<string>();
  const [passwordHelperText, setPasswordHelperText] = useState<string>();

  const handleSubmit = (event: MouseEvent<HTMLFormElement>) => {
    event.preventDefault();

    const email = event.currentTarget.email.value;
    const password = event.currentTarget.password.value;
    const requiredErrorText = "Please fill in the field";

    if (!email) return setEmailHelperText(requiredErrorText);
    if (!password) return setPasswordHelperText(requiredErrorText);

    serverLogin(email, password)
      .then((data) => {
        login(data.token);
        history.push("/");
      })
      .catch((err) => {
        console.error(err);
        setError("Probably such email and password does not exist.");
      });
  };

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleChangeEmail = () => {
    setEmailHelperText("");
    setError("");
  };

  const handleChangePassword = () => {
    setPasswordHelperText("");
    setError("");
  };

  return (
    <>
      <CssBaseline enableColorScheme />

      <Container component="main" maxWidth="xs" sx={{ mb: 8 }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            mt: 8,
            mb: 1,
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>

          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
        </Box>

        <Box
          component="form"
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            required
            id="email"
            name="email"
            type="email"
            label="Email"
            defaultValue="example@email.com"
            error={!!error || !!emailHelperText}
            helperText={emailHelperText}
            onChange={handleChangeEmail}
          />

          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            required
            id="password"
            name="password"
            type={showPassword ? "text" : "password"}
            label="Password"
            defaultValue="password"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            error={!!error || !!passwordHelperText}
            helperText={passwordHelperText}
            onChange={handleChangePassword}
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            size="large"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign in
          </Button>

          {error && (
            <Alert severity="error">
              <AlertTitle>Authentication error</AlertTitle>
              {error} <br />
              <strong>
                Update the page and use default values in inputs to enter.
              </strong>
            </Alert>
          )}
        </Box>
      </Container>
    </>
  );
}
