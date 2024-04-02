import React from "react";
import PropTypes from "prop-types";

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
import { validateArrayData, validateString } from "../../../utils";
import KeywordItem from "./KeywordItem";
import TopicHeader from "./TopicHeader";

const TopicGroup = ({ data }) => {
  const { topic, keywords } = data;
  return (
    <>
      <TopicHeader title={topic} />
      <Grid container spacing={2} className="mb-30 pb-10">
        {validateArrayData(keywords)
          ? keywords.map((obj, index) => (
              <KeywordItem key={index} keyword={obj} />
            ))
          : "0 Keywords Found"}
      </Grid>
    </>
  );
};

TopicGroup.propTypes = {
  data: PropTypes.shape({
    topic: PropTypes.string,
    keywords: PropTypes.array,
  }),
};
export default TopicGroup;
