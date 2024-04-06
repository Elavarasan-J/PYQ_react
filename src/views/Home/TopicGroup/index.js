import React from "react";
import PropTypes from "prop-types";

import { Grid } from "@mui/material";
import { validateArrayData, validateObjectData } from "../../../utils";
import KeywordItem from "./KeywordItem";
import TopicHeader from "./TopicHeader";
import CustomSnackbar from "../../../components/CustomSnackbar";
import { useSelector, useDispatch } from "react-redux";
import { updateCartActions } from "../../../redux/app/appSlice";

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
