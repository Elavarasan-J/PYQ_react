import React, { useEffect } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Table,
  TableCell,
  TableBody,
  TableHead,
  TableRow,
  TableContainer,
  IconButton,
  Typography,
} from "@mui/material";

import { useDispatch, useSelector } from "react-redux";
import { Close } from "@mui/icons-material";
import { privateApiPOST } from "../../../../components/PrivateRoute";
import { showCartDialog } from "../../../../redux/app/appSlice";
import Api from "../../../../components/Api";

import CART_TOTAL from "../../../../mock-adapter/cartTotal.json";

const CartModal = () => {
  const { openCart, cartItems } = useSelector((state) => state.app);
  const dispatch = useDispatch();

  // FETCH - Cart Total API
  const handleFetchCartTotal = () => {
    let payload = { keywords: cartItems };
    privateApiPOST(Api.getCartTotal, payload)
      .then((res) => {
        console.log("res", res);
        const { data, status } = res;

        if (status === 200) {
        } else if (status == 204) {
        }
      })
      .catch((error) => {
        console.log("Fetch cart total API ERROR --->", error);
      })
      .finally(() => console.log("Fetch cart total API EXECUTED"));
  };

  // CLICK - cart dialog close
  const handleClose = () => {
    dispatch(showCartDialog(false));
  };

  useEffect(() => {
    if (openCart) handleFetchCartTotal();
  }, [openCart]);
  return (
    <>
      {openCart && (
        <Dialog
          open={openCart}
          onClose={handleClose}
          scroll={"paper"}
          aria-labelledby="cart-dialog-title"
          aria-describedby="cart-dialog-content"
          fullWidth
          BackdropProps={{
            sx: { backgroundColor: "rgba(0, 0, 0, 0.85)" },
          }}
          sx={{
            "& .MuiPaper-root": {
              maxWidth: "600px",
            },
          }}
        >
          <DialogTitle
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            variant="h4"
            id="cart-dialog-title"
            sx={{ color: (theme) => theme.palette.primary["800"] }}
          >
            CART
            <IconButton
              sx={{ padding: 0 }}
              aria-label="close"
              onClick={handleClose}
            >
              <Close />
            </IconButton>
          </DialogTitle>
          <DialogContent
            sx={{ color: (theme) => theme.palette.common.black }}
            dividers
          >
            <TableContainer sx={{ mt: "10px" }}>
              <Table aria-label="simple table">
                {/* <TableHead>
                  <TableRow sx={{ "& th": { border: 0, fontWeight: 600 } }}>
                    <TableCell>Keyword</TableCell>
                    <TableCell align="right">Price(Rs)</TableCell>
                  </TableRow>
                </TableHead> */}
                <TableBody
                  sx={{
                    "& >tr:nth-of-type(odd) td": {
                      backgroundColor: "rgba(0,0,0,0.06)",
                    },
                    "& td": {
                      border: 0,
                      fontSize: "2rem",
                    },
                  }}
                >
                  <TableRow sx={{ "& td": { fontWeight: 600 } }}>
                    <TableCell>Keyword</TableCell>
                    <TableCell align="right">Price(Rs)</TableCell>
                  </TableRow>
                  {CART_TOTAL.map((row) => (
                    <TableRow key={row.name}>
                      <TableCell scope="row">{row.name}</TableCell>
                      <TableCell align="right">{row.price}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </DialogContent>
          <DialogActions
            sx={{ padding: "10px 24px", justifyContent: "space-between" }}
          >
            <Typography variant="h5" color="text.success">
              Total Cost: Rs.10421
            </Typography>
            <Button variant="contained" onClick={handleClose}>
              Subscribe
            </Button>
          </DialogActions>
        </Dialog>
      )}
    </>
  );
};

export default CartModal;
