import React from "react";
import PropTypes from "prop-types";
import { Grid, IconButton } from "@mui/material";

import { IconShoppingBagPlus, IconShoppingBagX } from "@tabler/icons-react";

import { useDispatch, useSelector } from "react-redux";
import {
  updateCartActions,
  updateCartItems,
} from "../../../redux/app/appSlice";

const KeywordItem = ({ keyword }) => {
  const { id, name, count } = keyword;
  const { cartItems } = useSelector((state) => state.app);
  const dispatch = useDispatch();

  // CLICK - Add to cart button
  const handleAddToCart = (id) => {
    const tempObj = {};
    tempObj["action"] = "ADD";
    tempObj["id"] = id;
    tempObj["name"] = name;

    dispatch(updateCartItems(tempObj));
  };

  // CLICK - Remove Cart button
  const handeRemoveFromCart = (id) => {
    const tempObj = {};
    tempObj["action"] = "REMOVE";
    tempObj["id"] = id;

    dispatch(updateCartItems(tempObj));
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
            onClick={() => handleAddToCart(id)}
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
