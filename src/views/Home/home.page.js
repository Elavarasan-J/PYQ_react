import React from "react";
import Page from "../../components/Page";

// Material UI
import { Box, Button, Tab, Tabs, Container } from "@mui/material";

const HomePage = () => {
  const [activePanel, setActivePanel] = React.useState(0);

  const handleChange = (e, newValue) => {
    console.log("newValue", newValue);
    setActivePanel(newValue);
  };
  return (
    <Page title={"AI Powered TNPSC PYQ"}>
      <Box sx={{ width: "100%", typography: "body1" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={activePanel}
            onChange={handleChange}
            aria-label="lab API tabs example"
          >
            <Tab label="All Keywords">All Keywords</Tab>
            <Tab label="Advanced Search">Advanced Search</Tab>
          </Tabs>
        </Box>
        <div
          role="tabpanel"
          className="py-30 py-xl-50"
          hidden={activePanel !== 0}
        >
          <Container maxWidth="lg">All Keywords 1</Container>
        </div>
        <div
          role="tabpanel"
          className="py-30 py-xl-50"
          hidden={activePanel !== 1}
        >
          <Container maxWidth="lg">
            Advanced Search 2 <Button variant="contained">Button</Button>
          </Container>
        </div>
      </Box>
    </Page>
  );
};

export default HomePage;
