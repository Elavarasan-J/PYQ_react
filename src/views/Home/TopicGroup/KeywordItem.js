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

import { IconShoppingBagPlus, IconShoppingBagX } from "@tabler/icons-react";

import { useDispatch, useSelector } from "react-redux";
import { updateCartItems } from "../../../redux/app/appSlice";

const KeywordItem = ({ keyword }) => {
  const { id, name, count } = keyword;
  const { cartItems } = useSelector((state) => state.app);
  const dispatch = useDispatch();

  // CLICK - Add to cart button
  const handeAddToCart = (id) => {
    dispatch(updateCartItems({ action: "ADD", id }));
  };

  // CLICK - Remove Cart button
  const handeRemoveFromCart = (id) => {
    dispatch(updateCartItems({ action: "REMOVE", id }));
  };

  return (
    <Grid className="keyword-item" item md={6} lg={4}>
      <div className="action-item d-flex align-items-center justify-content-between">
        <span className="d-block me-15">{name}</span>
        {cartItems.includes(id) ? (
          <IconButton
            color="success"
            aria-label="Remove From Cart"
            sx={{
              border: 1,
              color: (theme) => theme.palette.common.white,
              borderColor: (theme) => theme.palette.success.main,
              backgroundColor: (theme) =>
                `${theme.palette.success.main} !important`,
            }}
            onClick={() => handeRemoveFromCart(id)}
          >
            <IconShoppingBagX width={20} height={20} />
          </IconButton>
        ) : (
          <IconButton
            color="success"
            aria-label="Add To Cart"
            sx={{
              border: 1,
              borderColor: (theme) => theme.palette.success.main,
              backgroundColor: (theme) =>
                `${theme.palette.success[50]} !important`,
            }}
            onClick={() => handeAddToCart(id)}
          >
            <IconShoppingBagPlus width={20} height={20} />
          </IconButton>
        )}
      </div>
    </Grid>
  );
};

KeywordItem.propTypes = {
  keyword: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    count: PropTypes.number,
  }),
};
export default KeywordItem;
