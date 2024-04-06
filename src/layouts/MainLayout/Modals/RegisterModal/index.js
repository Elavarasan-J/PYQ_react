import React, { useEffect } from "react";
import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Typography,
} from "@mui/material";

import { useDispatch, useSelector } from "react-redux";
import { Close } from "@mui/icons-material";
import { privateApiPOST } from "../../../../components/PrivateRoute";
import { showCartDialog } from "../../../../redux/app/appSlice";
import Api from "../../../../components/Api";
import RegisterForm from "../../../../views/auth/Form/RegisterForm";

const RegisterModal = () => {
  const { openCart } = useSelector((state) => state.app);
  const dispatch = useDispatch();

  // CLICK - cart dialog close
  const handleClose = () => {
    dispatch(showCartDialog(false));
  };

  useEffect(() => {}, []);

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
            REGISTER
            <IconButton
              sx={{ padding: 0 }}
              aria-label="close"
              onClick={handleClose}
            >
              <Close />
            </IconButton>
          </DialogTitle>
          <DialogContent
            sx={{
              color: (theme) => theme.palette.common.black,
              padding: "40px",
            }}
            dividers
          >
            <RegisterForm />
          </DialogContent>
        </Dialog>
      )}
    </>
  );
};

export default RegisterModal;
