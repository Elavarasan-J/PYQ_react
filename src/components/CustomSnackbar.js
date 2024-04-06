import React from "react";
import { makeStyles } from "@mui/styles";
import { Snackbar } from "@mui/material";
import { Alert, AlertTitle } from "@mui/material";

import PropTypes from "prop-types";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(2),
    //boxShadow: "-2px 5px 15px -2px rgba(0,0,0,0.71)",
  },
  alertContainer: {
    minWidth: 350,
  },
}));

export const alertInitialState = {
  isOpen: false,
  alertText: "",
  severity: "",
};

const CustomSnackbar = ({
  open,
  severity,
  alertTitle,
  alertText,
  onClose,
  position,
}) => {
  const classes = useStyles();

  return (
    <Snackbar
      anchorOrigin={position}
      open={open}
      autoHideDuration={5000}
      onClose={onClose}
      className={classes.root}
    >
      <Alert
        severity={severity}
        onClose={onClose}
        className={classes.alertContainer}
        variant="filled"
      >
        {alertTitle ? (
          <AlertTitle sx={{ color: (theme) => theme.palette.common.white }}>
            {alertTitle}
          </AlertTitle>
        ) : null}
        {alertText}
      </Alert>
    </Snackbar>
  );
};

CustomSnackbar.prototype = {
  open: PropTypes.bool,
  severity: PropTypes.string, //['success','warning', 'error', "info"]
  alertText: PropTypes.string,
  alertTitle: PropTypes.string,
  onClose: PropTypes.func,
  position: PropTypes.object,
  variant: PropTypes.string,
};

CustomSnackbar.defaultProps = {
  alertTitle: "",
  position: {
    vertical: "top",
    horizontal: "right",
  },
  onClose: () => {
    return;
  },
  variant: "filled",
};

export default CustomSnackbar;
