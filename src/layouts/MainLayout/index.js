import React, { useEffect } from "react";
import { CircularProgress, Backdrop } from "@mui/material";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import { makeStyles } from "@mui/styles";
import { useDispatch, useSelector } from "react-redux";

import { disableInitialLoading } from "../../redux/app/appSlice";
import Footer from "./Footer";

const useStyles = makeStyles((theme) => ({
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
