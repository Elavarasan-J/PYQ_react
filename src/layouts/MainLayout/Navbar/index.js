import React, { useState } from "react";
import config from "../../../config";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { menuItems } from "../../../menu-items";
import { IconBrandHipchat } from "@tabler/icons";

//Material UI
import {
  AppBar,
  Container,
  Toolbar,
  Typography,
  Box,
  Badge,
  Button,
  Tooltip,
  IconButton,
  Avatar,
  Menu,
  MenuItem,
  ListItemIcon,
  Divider,
  ClickAwayListener,
} from "@mui/material";
import NavLogo from "./NavLogo";

import { IconShoppingBag } from "@tabler/icons-react";
import SocialIcons from "./SocialIcons";
import HeroSection from "./HeroSection";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { cartItems } = useSelector((state) => state.app);
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
                sx={{ "& .MuiBadge-badge": { fontSize: "1.4rem" } }}
                badgeContent={cartItems.length ? cartItems.length : "0"}
                color="primary"
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
