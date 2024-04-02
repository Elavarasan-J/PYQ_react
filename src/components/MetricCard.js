import React from "react";
import PropTypes from "prop-types";
import { Card, CardContent, Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

import { MonetizationOn } from "@mui/icons-material";

const useStyles = makeStyles((theme) => ({
  metricIcon: {
    "& svg": {
      color: "#ffffff",
      opacity: 0.2,
      width: "70px",
      height: "70px",
    },
  },
}));

const MetricCard = ({
  cardTitle,
  cardHeight,
  bgColor,
  metricValue,
  metricText,
  metricIcon,
}) => {
  const classes = useStyles();
  return (
    <Card
      className={classes.metricCard}
      variant="outlined"
      sx={{
        backgroundColor: `${bgColor}`,
        border: 0,
        minHeight: `${cardHeight}px`,
      }}
    >
      <CardContent
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box>
          <Typography
            variant="h5"
            mb={2}
            sx={{ color: "#ffffff", textTransform: "uppercase" }}
          >
            {cardTitle}
          </Typography>
          <Typography variant="h2" mb={1} sx={{ color: "#ffffff" }}>
            {metricValue}
          </Typography>
          {metricText && metricText != "" ? (
            <Typography component="p" sx={{ color: "#ffffff", opacity: "0.9" }}>
              {metricText}
            </Typography>
          ) : null}
        </Box>
        <Box sx={{ ml: 4 }} className={classes.metricIcon}>
          {metricIcon}
          {/* <MonetizationOn
            sx={{
              width: "70px",
              height: "70px",
              color: "#ffffff",
              opacity: 0.3,
            }}
          /> */}
        </Box>
      </CardContent>
    </Card>
  );
};
MetricCard.propTypes = {
  cardTitle: PropTypes.string,
  bgColor: PropTypes.string,
  metricValue: PropTypes.string,
  metricText: PropTypes.string,
  metricIcon: PropTypes.object,
};

MetricCard.defaultProps = {
  cardTitle: "Metric Title",
  bgColor: "#d84315",
  metricValue: "",
  metricText: "",
  cardHeight: 120,
  metricIcon: <MonetizationOn />,
};
export default MetricCard;
