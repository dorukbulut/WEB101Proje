import { Box } from "@mui/system";
import React, { useState } from "react";
import { Button, Grid, IconButton, Link, TextField } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function LogInComponent() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    axios({
      method : "post",
      data : {
        email : email,
        password: password
      },

      url : "http://localhost:3001/mentee/login",
      withCredentials : true
    })

    .then(res => {
        if(res.status == 201) {
          const user = res.data.user;

          navigate("/mentee");
        }
    })

    .catch(err => console.log(err));
  }

  return (
    <Box
      justifyContent="center"
      alignItems="center"
      boxShadow={3}
      sx={{
        backgroundColor: "rgba(255,255,255,0.9)",
        padding: 3,
        flexGrow: 1,
        margin: 3,
        border: 1,
        borderRadius: 3,
        fontWeight: "bold",
      }}
    >
      <Grid
        container
        spacing={3}
        alignItems="center"
        justifyContent="center"
        direction="row"
      >
        <Grid item xs={12} md={12}>
          <Box color="rgba(167,139,250)">Email Adress</Box>
          <TextField
            required
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email adress"
            fullWidth
            id="fullWidth"
            sx={{ pt: 1 }}
          />
        </Grid>
        <Grid item xs={12} md={12}>
          <Box color="rgba(167,139,250)">Password</Box>
          <TextField
            required
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            fullWidth
            id="fullWidth"
            sx={{ pt: 1 }}
            type={showPassword ? "text" : "password"}
          />

          <IconButton
            aria-label="toggle password visibility"
            onClick={() => setShowPassword((s) => !s)}
            edge="end"
          >
            {showPassword ? <VisibilityIcon /> : <VisibilityOffOutlinedIcon />}
          </IconButton>
        </Grid>
        <Box>
          <Link> Forget password</Link>
        </Box>

        <Grid item xs={12} md={12}>
          <Box display="flex" justifyContent="center">
            <Button onClick={handleSubmit} variant="contained" color="success" fullWidth>
              Sign In
            </Button>
          </Box>
        </Grid>
        <Grid item xs={12} md={12}>
          <Box display="flex" justifyContent="center">
            <Button
              variant="contained"
              color="secondary"
              fullWidth
              onClick={() => {
                navigate("/register");
              }}
            >
              Register Now
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
