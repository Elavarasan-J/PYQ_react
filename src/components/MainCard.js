import PropTypes from "prop-types";
import React from "react";
import config from "../config";

// Material UI
import { makeStyles } from "@mui/styles";
import {
  Card,
  CardContent,
  Box,
  Grid,
  Typography,
  CircularProgress,
  Tooltip,
  Fade,
} from "@mui/material";

// imports
//import MainCard from "../MainCard";

import { InfoOutlined } from "@mui/icons-material";
import { IconInfoCircle } from "@tabler/icons";
import DataNotFound from "./DataNotFound";

// Tooltip styles
const useStylesBootstrap = makeStyles((theme) => ({
  tooltip: {
    //   backgroundColor: theme.palette.common.black,
    fontSize: 14,
    fontWeight: 400,
    padding: 10,
  },
  overlayWrap: {
    position: "absolute",
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: "4",
    background: "rgba(255, 255, 255, 0.7)",
    "& h5": {
      color: "#009b54",
      fontSize: "16px",
      lineHeight: "24px",
      fontWeight: "600",
    },
  },
}));

function BootstrapTooltip(props) {
  const classes = useStylesBootstrap();

  return <Tooltip arrow classes={classes} {...props} />;
}

const MainCard = React.forwardRef(
  (
    {
      cardTitle,
      showInfoIcon,
      infoIconContent,
      content = true,
      contentClass,
      contentSX,
      cardAction,
      contentHeight,
      isLoadingSpin,
      children,
      isCard,
      showNoDataText,
      isFeatureDisabled,
      type = "",
      ...others
    },
    ref
  ) => {
    const classes = useStylesBootstrap();

    switch (type) {
      case "COMPONENT_WRAPPER_CARD":
        return (
          <Card
            ref={ref}
            {...others}
            elevation={8}
            sx={{
              border: `1px solid ${config.borderColor}`,
            }}
          >
            {/* card content */}
            {content && (
              <CardContent sx={contentSX} className={contentClass}>
                {children}
              </CardContent>
            )}
            {!content && children}
          </Card>
        );

      case "COMPONENT_WRAPPER":
        return (
          <Box height={contentHeight} width="100%">
            {/* Loading Spin */}
            {isLoadingSpin && (
              <Box
                display="flex"
                height="100%"
                width="100%"
                justifyContent="center"
                alignItems="center"
              >
                <CircularProgress color="primary" />
              </Box>
            )}
            {/* No Content Text */}
            {!children && !isLoadingSpin && showNoDataText && <DataNotFound />}
            {/* card Content  */}
            {!isLoadingSpin && children ? children : null}
          </Box>
        );

      default:
        return (
          <Fade in>
            <Card
              ref={ref}
              {...others}
              elevation={8}
              sx={{
                border: `1px solid ${config.borderColor}`,
                //height: `${contentHeight}px`,
              }}
            >
              <CardContent>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <Grid
                      container
                      alignItems="center"
                      justifyContent="space-between"
                      flexWrap="wrap"
                      spacing={1}
                    >
                      <Grid item>
                        <Typography variant="h4">{cardTitle}</Typography>
                      </Grid>
                      <Grid item display="flex" alignItems="center">
                        {cardAction}
                        {showInfoIcon && (
                          <BootstrapTooltip
                            title={infoIconContent}
                            sx={{ marginLeft: 1 }}
                          >
                            <InfoOutlined />
                          </BootstrapTooltip>
                          // IconInfoCircle
                        )}
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12}>
                    <Box
                      height={contentHeight}
                      width="100%"
                      sx={{ position: "relative" }}
                    >
                      {/* Overlay Feature */}
                      {isFeatureDisabled && (
                        <Box className={classes.overlayWrap}>
                          <Typography
                            variant={"h5"}
                            textAlign="center"
                            color="inherit"
                          >
                            This feature will be available with one month's data
                          </Typography>
                        </Box>
                      )}
                      {/* Loading Spin */}
                      {isLoadingSpin && (
                        <Box
                          display="flex"
                          height="100%"
                          width="100%"
                          justifyContent="center"
                          alignItems="center"
                          sx={{
                            position: "absolute",
                            backgroundColor: "background.paper",
                            zIndex: "10",
                            left: 0,
                            top: 0,
                          }}
                        >
                          <CircularProgress size={30} color="primary" />
                        </Box>
                      )}
                      {/* No Content Text */}
                      {!children && !isLoadingSpin && showNoDataText && (
                        <DataNotFound />
                      )}
                      {/* card Content  */}
                      {children ? children : null}
                    </Box>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Fade>
        );
    }
  }
);

MainCard.propTypes = {
  isCard: PropTypes.bool,
  showNoDataText: PropTypes.bool,
  showInfoIcon: PropTypes.bool,
  infoIconContent: PropTypes.string,
  cardTitle: PropTypes.string,
  contentHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  isLoadingSpin: PropTypes.bool.isRequired,
  children: PropTypes.node,
  cardAction: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.string,
    PropTypes.object,
  ]),
  isFeatureDisabled: PropTypes.bool,
};

MainCard.defaultProps = {
  cardTitle: "Card Title",
  contentHeight: 350,
  isLoadingSpin: false,
  isCard: true,
  showNoDataText: true,
  showInfoIcon: false,
  infoIconContent: "Sample Text",
  isFeatureDisabled: false,
};

export default MainCard;
