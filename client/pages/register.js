import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Grid, Tab } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import MenteeRegisterForm from "../components/forms/MenteeRegisterForm";
import MentorRegisterForm from "../components/forms/MentorRegisterForm";

export default function RegisterPage() {
  const [activeTab, setActiveTab] = useState("menti");
  const handleChange = (event, newValue) => {
    setActiveTab(newValue);
  };
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      sx={{ height: "87vh" }}
    >
      <Grid item md={6} xs={12}>
        <Box sx={{ width: "100%", typography: "body1" }}>
          <TabContext value={activeTab}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <TabList
                onChange={handleChange}
                aria-label="lab API tabs example"
                centered
                variant="fullWidth"
                textColor="secondary"
                indicatorColor="secondary"
              >
                <Tab label="As a Menti" value="menti" />
                <Tab label="As a Mentor" value="mentor" />
              </TabList>
            </Box>
            <TabPanel value="menti">
              <MenteeRegisterForm></MenteeRegisterForm>
            </TabPanel>

            <TabPanel value="mentor">
              <MentorRegisterForm></MentorRegisterForm>
            </TabPanel>
          </TabContext>
        </Box>
      </Grid>
    </Grid>
  );
}