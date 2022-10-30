import { Grid } from "@mui/material";
import LogInComponent from "../components/Auth/LogInComponent";

export default function SignInPage() {
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      sx={{ height: "87vh" }}
    >
      <Grid item md={6} xs={12}>
        <LogInComponent></LogInComponent>
      </Grid>
    </Grid>
  );
}
