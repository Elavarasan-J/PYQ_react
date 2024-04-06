import React from "react";
import { Link, useNavigate } from "react-router-dom";

// material-ui
import { makeStyles } from "@mui/styles";
import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Stack,
  Typography,
  Alert,
} from "@mui/material";

// third party
import * as Yup from "yup";
import { Formik } from "formik";
import Cookies from "js-cookie";
import axios from "axios";
import config from "../../../config";
// project imports
import Api from "../../../components/Api";

// assets
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

// style constant
const useStyles = makeStyles((theme) => ({
  redButton: {
    fontSize: "1rem",
    fontWeight: 500,
    backgroundColor: theme.palette.grey[50],
    border: "1px solid",
    borderColor: theme.palette.grey[100],
    color: theme.palette.grey[700],
    textTransform: "none",
    "&:hover": {
      backgroundColor: theme.palette.primary.light,
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "0.875rem",
    },
  },
  signDivider: {
    flexGrow: 1,
  },
  signText: {
    cursor: "unset",
    margin: theme.spacing(2),
    padding: "5px 56px",
    borderColor: theme.palette.grey[100] + " !important",
    color: theme.palette.grey[900] + "!important",
    fontWeight: 500,
  },
  loginIcon: {
    marginRight: "16px",
    [theme.breakpoints.down("sm")]: {
      marginRight: "8px",
    },
  },
  loginInput: {
    ...theme.typography.customInput,
  },
}));

//============================|| FIREBASE - LOGIN ||============================//

const RegisterForm = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  const { defaultPath } = config;

  const [checked, setChecked] = React.useState(true);

  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <React.Fragment>
      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
          phone: "",
          submit: null,
        }}
        validationSchema={Yup.object().shape({
          email: Yup.string()
            .email("Must be a valid email")
            .max(255)
            .required("Email is required"),
          password: Yup.string().max(255).required("Password is required"),
        })}
        onSubmit={(values, { setSubmitting, resetForm, setErrors }) => {
          const url = Api.register;

          const config = {
            headers: {
              "X-CSRFToken": Cookies.get("csrftoken"),
            },
          };

          axios
            .post(url, values, config)
            .then((res) => {
              if (res.status === 200) {
              }
            })
            .catch((error) => {
              console.log(error);
            });
        }}
      >
        {({
          errors,
          handleBlur,
          handleChange,
          handleSubmit,
          isSubmitting,
          touched,
          values,
        }) => (
          <form noValidate onSubmit={handleSubmit}>
            <Typography variant="body1" fontWeight="400" mb={"5px"}>
              Complete the following fields to create your account with us.
            </Typography>
            <FormControl
              fullWidth
              error={Boolean(touched.email && errors.email)}
              className={classes.loginInput}
            >
              <InputLabel htmlFor="name">Name *</InputLabel>
              <OutlinedInput
                id="name"
                type="text"
                value={values.name}
                name="name"
                onBlur={handleBlur}
                onChange={handleChange}
                label="Name *"
                inputProps={{
                  classes: {
                    notchedOutline: classes.notchedOutline,
                  },
                }}
              />
            </FormControl>

            <FormControl
              fullWidth
              error={Boolean(touched.email && errors.email)}
              className={classes.loginInput}
            >
              <InputLabel htmlFor="outlined-adornment-email-login">
                Email Address *
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-email-login"
                type="email"
                value={values.email}
                name="email"
                onBlur={handleBlur}
                onChange={handleChange}
                label="Email Address *"
                inputProps={{
                  classes: {
                    notchedOutline: classes.notchedOutline,
                  },
                }}
              />
            </FormControl>

            <FormControl
              fullWidth
              error={Boolean(touched.password && errors.password)}
              className={classes.loginInput}
            >
              <InputLabel htmlFor="outlined-adornment-password-login">
                Password *
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password-login"
                type={showPassword ? "text" : "password"}
                value={values.password}
                name="password *"
                onBlur={handleBlur}
                onChange={handleChange}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
                inputProps={{
                  classes: {
                    notchedOutline: classes.notchedOutline,
                  },
                }}
              />
              {/* {touched.password && errors.password && (
                <FormHelperText
                  error
                  id="standard-weight-helper-text-password-login"
                >
                  {errors.password}
                </FormHelperText>
              )} */}
            </FormControl>

            <FormControl
              fullWidth
              error={Boolean(touched.email && errors.email)}
              className={classes.loginInput}
            >
              <InputLabel htmlFor="phone">Phone Number *</InputLabel>
              <OutlinedInput
                id="phone"
                type="text"
                value={values.phone}
                name="phone"
                onBlur={handleBlur}
                onChange={handleChange}
                label="Phone *"
                inputProps={{
                  classes: {
                    notchedOutline: classes.notchedOutline,
                  },
                }}
              />
            </FormControl>

            {/* <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
              spacing={1}
            >
              <Typography
                variant="body2"
                component={Link}
                to={"/forgot-password"}
                sx={{ textDecoration: "none" }}
              >
                Forgot Password?
              </Typography>
            </Stack> */}
            {errors.submit && (
              <Alert
                variant="filled"
                severity="error"
                sx={{
                  mt: 3,
                }}
              >
                {errors.submit}
              </Alert>
            )}

            {/* Success! You're now a registered member with us. */}

            <Box
              sx={{
                mt: 2,
              }}
            >
              <Button
                disableElevation
                disabled={isSubmitting}
                fullWidth
                size="large"
                type="submit"
                variant="contained"
                color="primary"
                sx={{ textTransform: "uppercase", py: "10px" }}
              >
                Submit
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </React.Fragment>
  );
};

export default RegisterForm;
