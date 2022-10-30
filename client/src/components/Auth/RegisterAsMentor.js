import { Box } from "@mui/system";
import React, { useState } from "react";
import { Button, Grid, IconButton, Link, TextField } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import { useNavigate } from "react-router-dom";

export default function RegisterAsMentor() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
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
        spacing={2}
        alignItems="center"
        justifyContent="center"
        direction="row"
      >
        <Grid item xs={6} md={6}>
          <Box color="rgba(167,139,250)">Name</Box>
          <TextField
            required
            // onChange={(e) => setEmail(e.target.value)}
            placeholder="Name"
            fullWidth
            id="fullWidth"
            sx={{ pt: 1 }}
          />
        </Grid>
        <Grid item xs={6} md={6}>
          <Box color="rgba(167,139,250)">Surname</Box>
          <TextField
            required
            // onChange={(e) => setEmail(e.target.value)}
            placeholder="Surname"
            fullWidth
            id="fullWidth"
            sx={{ pt: 1 }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Box color="rgba(167,139,250)">Username</Box>
          <TextField
            required
            // onChange={(e) => setEmail(e.target.value)}
            placeholder="Find a username"
            fullWidth
            id="fullWidth"
            sx={{ pt: 1 }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Box color="rgba(167,139,250)">Company</Box>
          <TextField
            required
            // onChange={(e) => setEmail(e.target.value)}
            placeholder="Your current company"
            fullWidth
            id="fullWidth"
            sx={{ pt: 1 }}
          />
        </Grid>
        <Grid item xs={12} md={12}>
          <Box color="rgba(167,139,250)">Email Adress</Box>
          <TextField
            required
            // onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email adress"
            fullWidth
            id="fullWidth"
            sx={{ pt: 1 }}
          />
        </Grid>
        <Grid item xs={12} md={12}>
          <Box color="rgba(167,139,250)">Phone</Box>
          <TextField
            required
            // onChange={(e) => setEmail(e.target.value)}
            placeholder="Phone Number "
            fullWidth
            id="fullWidth"
            sx={{ pt: 1 }}
          />
        </Grid>
        <Grid item xs={12} md={12}>
          <Box color="rgba(167,139,250)">Password</Box>
          <TextField
            required
            // onChange={(e) => setPassword(e.target.value)}
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

        <Grid item xs={12} md={12}>
          <Box display="flex" justifyContent="center">
            <Button variant="contained" color="success" fullWidth>
              Register
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
