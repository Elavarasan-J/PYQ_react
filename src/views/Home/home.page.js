import React, { useState } from "react";
import Page from "../../components/Page";

// Material UI
import {
  Box,
  Button,
  Tab,
  Tabs,
  Container,
  Grid,
  IconButton,
  Typography,
  Alert,
  ToggleButtonGroup,
  ToggleButton,
  Divider,
} from "@mui/material";
import CustomAutoComplete from "../../components/CustomAutoComplete";

import {
  IconShoppingCart,
  IconShoppingBagPlus,
  IconShoppingBagMinus,
  IconShoppingCartPlus,
  IconFileTypePdf,
  IconCloudDownload,
  IconFileDownload,
  IconBookDownload,
  IconDiscount2Off,
  IconCoinRupee,
} from "@tabler/icons-react";

// MOCK DATA
import SUBJECT_DATA from "../../mock-adapter/subjectData.json";
import TopicGroup from "./TopicGroup";
import { validateArrayData } from "../../utils";

const subjectAccessList = [
  "Development Administration in Tamil Nadu",
  "History and Culture of Tamil Nadu",
  "General Science - Environment and Ecology",
  "History and Culture of India",
  "Indian Economy",
  "Indian National Movement",
  "Geography of India",
  "Indian Polity",
  "Current Events",
  "General Science - Biology",
  "Aptitude and Mental Ability",
  "General Science",
];

const HomePage = () => {
  const initialState = {
    keywordType: "PAID",
  };
  const [state, setState] = useState(initialState);
  const [activePanel, setActivePanel] = React.useState(0);

  const handleChange = (e, newValue) => {
    console.log("newValue", newValue);
    setActivePanel(newValue);
  };

  // CHANGE- Keyword Type
  const handleKeywordTypeChange = (event, newValue) => {
    setState((prev) => ({
      ...prev,
      keywordType: newValue,
    }));
  };
  return (
    <Page title={"AI Powered TNPSC PYQ"}>
      <Box className="custom-tabs">
        <Tabs
          value={activePanel}
          onChange={handleChange}
          sx={{
            "& .MuiTabs-flexContainer": {
              borderBottom: 1,
              borderColor: (theme) => theme.palette.common.black,
            },
            "& .MuiTabs-indicator": {
              display: "none",
            },
          }}
        >
          <Tab
            disableRipple
            className="mw-100 p-15 nav-link rounded-0 w-50 flex-row"
            label={
              <>
                <img
                  className="img-fluid me-10"
                  src="/static/images/icons/books.svg"
                  alt="Books"
                />{" "}
                All Keywords
                <img
                  className="img-fluid ms-20 tab-arrow"
                  src="/static/images/icons/tab-arrow.svg"
                  alt="Arrow"
                />
              </>
            }
          />
          <Tab
            disableRipple
            className="mw-100 p-15 nav-link rounded-0 w-50 flex-row"
            label={
              <>
                <img
                  className="img-fluid me-10"
                  src="/static/images/icons/key.svg"
                  alt="Key"
                />
                Advanced Search
                <img
                  className="img-fluid ms-20 tab-arrow"
                  src="/static/images/icons/tab-arrow.svg"
                  alt="Arrow"
                />
              </>
            }
          />
        </Tabs>
        <div
          role="tabpanel"
          className="py-30 py-xl-50"
          hidden={activePanel !== 0}
        >
          <Container maxWidth="lg">
            <div className="source-container px-15 py-30 p-lg-30 mb-30 keywords-container">
              <h4 className="source-title mb-0">AI Curated Keywords</h4>

              <Grid mt={2} mb={2} alignItems="center" container spacing={1}>
                <Grid item md={8}>
                  <CustomAutoComplete
                    disableClearable
                    value={subjectAccessList[0] || ""}
                    options={subjectAccessList || []}
                    attributeName="Subjects"
                    color="primary"
                    sx={{
                      "& .MuiFilledInput-root": {
                        border: "0.1rem solid #666",
                      },
                    }}
                  />
                </Grid>
                <Grid item md={4} textAlign={"right"}>
                  <ToggleButtonGroup
                    value={state.keywordType}
                    exclusive
                    onChange={handleKeywordTypeChange}
                    aria-label="Keyword Type"
                    sx={{
                      "& .MuiToggleButton-root": {
                        borderColor: (theme) => theme.palette.common.black,
                        color: (theme) => theme.palette.common.black,
                        "&.Mui-selected": {
                          backgroundColor: (theme) =>
                            `${theme.palette.common.black} !important`,
                          color: (theme) =>
                            `${theme.palette.common.white} !important`,
                          "&:hover": {},
                        },
                      },
                    }}
                  >
                    <ToggleButton disableRipple size="small" value="PAID">
                      <IconCoinRupee style={{ marginRight: "5px" }} />
                      Paid
                    </ToggleButton>
                    <ToggleButton disableRipple size="small" value="FREE">
                      <IconDiscount2Off style={{ marginRight: "5px" }} /> Free
                    </ToggleButton>
                  </ToggleButtonGroup>
                </Grid>
              </Grid>

              <Alert
                sx={{ fontWeight: 400, py: "3px" }}
                severity="success"
                variant="filled"
                icon={false}
              >
                There are 200 keywords identified across 10 different topics.
              </Alert>

              {validateArrayData(SUBJECT_DATA)
                ? SUBJECT_DATA.map((item, index) => (
                    <TopicGroup key={index} data={item} />
                  ))
                : "Found 0 keywords"}
            </div>
          </Container>
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
