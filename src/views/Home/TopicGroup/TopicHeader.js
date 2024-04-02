import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import { validateString } from "../../../utils";

const TopicHeader = ({ title }) => {
  return (
    <Box className="mb-15">
      <Grid mt={2} container spacing={1}>
        <Grid item md={8}>
          <Typography variant="h5">
            {validateString(title) ? title : "Topic Title"}:
          </Typography>
        </Grid>
        <Grid item md={4}></Grid>
      </Grid>
    </Box>
  );
};

export default TopicHeader;
