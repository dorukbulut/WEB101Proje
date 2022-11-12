import { Grid } from "@mui/material";
import LogInForm from "../components/forms/LoginForm";
import axios from "axios";
import { useRouter } from "next/router";
export default function SignInPage() {
  const router = useRouter();
  const handleSubmit = async(e, data, router) => {
    e.preventDefault();
    const res = await axios.post("http://localhost:3001/mentor/login",data, {withCredentials:true})
    
    if (res.status === 201) router.push("/mentor-dashboard")

    else router.push("/signin-mentor")
  }
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      sx={{ height: "87vh" }}
    >
      <Grid item md={6} xs={12}>
        <LogInForm handleSubmit={handleSubmit} name={"Mentor"}></LogInForm>
      </Grid>
    </Grid>
  );
}
