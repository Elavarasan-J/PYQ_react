import React, { useState } from "react";
import config from "../../../config";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { menuItems } from "../../../menu-items";
import { IconBrandHipchat } from "@tabler/icons";

//Material UI
import { AppBar, Container, Toolbar, Box, Badge } from "@mui/material";
import NavLogo from "./NavLogo";

import { IconShoppingBag } from "@tabler/icons-react";
import SocialIcons from "./SocialIcons";
import HeroSection from "./HeroSection";
import { useSelector, useDispatch } from "react-redux";
import { showCartDialog } from "../../../redux/app/appSlice";

const Navbar = () => {
  const { cartItems } = useSelector((state) => state.app);
  const dispatch = useDispatch();

  // CLICK - Open cart dialog
  const handleCartOpen = () => {
    dispatch(showCartDialog(true));
  };
  return (
    <>
      <SocialIcons />
      <AppBar
        position="static"
        sx={{
          position: "relative",
          backgroundColor: "transparent",
          boxShadow: "none",
          padding: "15px 0",
        }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters variant="dense">
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <NavLogo />
              <Badge
                sx={{
                  cursor: "pointer",
                  "& .MuiBadge-badge": { fontSize: "1.4rem" },
                }}
                badgeContent={cartItems.length ? cartItems.length : "0"}
                color="primary"
                onClick={handleCartOpen}
              >
                <IconShoppingBag width={30} height={30} color="#ffffff" />
              </Badge>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <HeroSection />
    </>
  );
};

export default Navbar;
