import React from "react";
import PropTypes from "prop-types";

import {
  Button,
  Dialog,
  DialogContentText,
  DialogTitle,
  DialogContent,
  DialogActions,
  Zoom,
} from "@mui/material";
import { makeStyles } from "@mui/styles";

import { IconInfoCircle } from "@tabler/icons";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  customPaper: {
    maxWidth: "650px",
    borderRadius: "20px",
    backgroundColor: "#efede4",
  },
  actionBtns: {
    minWidth: "100px",
    paddingLeft: "25px",
    paddingRight: "25px",
  },
  actionBtnClose: {
    color: "#d98403",
    borderColor: "rgb(254 157 11)",
  },
}));

const CustomDialog = ({
  open,
  title,
  content,
  actionButtonText,
  closeButtonText,
  handleActionClick,
  handleClose,
}) => {
  const classes = useStyles();
  return (
    <Dialog
      fullWidth={true}
      open={open}
      TransitionComponent={Zoom}
      transitionDuration={500}
      classes={{
        paper: classes.customPaper,
      }}
    >
      <DialogContent sx={{ textAlign: "center" }}>
        <IconInfoCircle color={"#fe9d0b"} size={70} stroke={1} />
        <DialogTitle>{title}</DialogTitle>
        <DialogContentText sx={{ fontSize: "16px", lineHeight: "24px", mb: 4 }}>
          {content}
        </DialogContentText>
        <DialogActions sx={{ justifyContent: "center" }}>
          {closeButtonText != "" && (
            <Button
              className={clsx(classes.actionBtns, classes.actionBtnClose)}
              onClick={handleClose}
              variant="outlined"
            >
              {closeButtonText}
            </Button>
          )}

          <Button
            className={classes.actionBtns}
            onClick={handleActionClick}
            variant="contained"
          >
            {actionButtonText}
          </Button>
        </DialogActions>
      </DialogContent>
    </Dialog>
  );
};

CustomDialog.propTypes = {
  open: PropTypes.bool,
  title: PropTypes.string,
  content: PropTypes.string,
  actionButtonText: PropTypes.string,
  closeButtonText: PropTypes.string,
  handleClose: PropTypes.func,
  handleActionClick: PropTypes.func,
};

CustomDialog.defaultProps = {
  open: false,
  title: "User already logged in!",
  content: "Do you want to continue?",
  actionButtonText: "Confirm",
  closeButtonText: "",
  handleActionClick: () => {
    return;
  },
  handleClose: () => {
    return;
  },
};

export default CustomDialog;
