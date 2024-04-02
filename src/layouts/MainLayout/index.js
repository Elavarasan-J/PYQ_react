import React, { useEffect } from "react";
import { CircularProgress, Backdrop } from "@mui/material";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import { makeStyles } from "@mui/styles";
import { useDispatch, useSelector } from "react-redux";
import config from "../../config";

import clsx from "clsx";

import { disableInitialLoading } from "../../redux/app/appSlice";
import Footer from "./Footer";

const useStyles = makeStyles((theme) => ({
  content: {
    // minHeight: "100vh",
    // background: "#f7f6f6",
  },
  headerSection: {
    position: "fixed",
    //height: "150px",
    width: "100%",
    zIndex: "1001",
    left: 0,
    top: 0,
    backgroundColor: "#ffffff",
    borderBottom: `1px solid ${config.borderColor}`,
    boxShadow: "rgb(0 0 0 / 6%) 0px 3px 8px",
  },
  attributeSideBarWrapper: {
    position: "fixed",
    top: "180px", //175px
    left: "20px",
    width: "280px",
    height: "calc(100vh - 200px)", //calc(100vh - 195px)
    minHeight: "350px",
    border: `1px solid ${config.borderColor}`,
    padding: "20px",
    overflowY: "auto",
    [theme.breakpoints.down("md")]: {
      display: "none",
      // width: "96%",
      // height: "auto",
      // position: "absolute",
      // minHeight: "20px",
      // left: "0",
      // top: "170px",
      // left: "2%",
      // right: "2%",
      // zIndex: 100,
    },
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
    // ["@media (max-width:1050px)"]: {
    //   top: "235px",
    // },
  },
  mainSection: {
    padding: "180px 20px 20px 330px",
    "& .noSidebar": {
      paddingLeft: "20px",
    },
    [theme.breakpoints.down("md")]: {
      paddingLeft: "20px",
    },
    [theme.breakpoints.down("sm")]: {
      paddingTop: "85px !important",
      paddingBottom: "30px !important",
      paddingLeft: "15px !important",
      paddingRight: "15px !important",
    },
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    background: "#fff",
  },
}));

const MainLayout = ({}) => {
  const { initialAppLoading } = useSelector((state) => state.app);
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    dispatch(disableInitialLoading(false));
    return () => {};
  }, []);

  return (
    <>
      <Backdrop className={classes.backdrop} open={initialAppLoading}>
        <CircularProgress color="primary" />
      </Backdrop>

      {!initialAppLoading && (
        <>
          <Navbar />
          <div className="main-section">
            <Outlet />
          </div>
          <Footer />
        </>
      )}
    </>
  );
};

export default MainLayout;
