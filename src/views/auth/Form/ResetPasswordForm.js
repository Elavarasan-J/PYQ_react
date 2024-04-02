import React from "react";
import { useParams } from "react-router-dom";
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

const ResetPasswordForm = ({ match }) => {
  const classes = useStyles();
  const params = useParams();

  const [isSuccess, setIsSuccess] = React.useState(false);

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
          password: "",
          passwordConfirmation: "",
          submit: null,
        }}
        validationSchema={Yup.object().shape({
          password: Yup.string()
            .required("Please enter your password")
            .matches(
              /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
              "Password must contain at least 8 characters, one uppercase, one number and one special case character"
            ),

          passwordConfirmation: Yup.string().when("password", {
            is: (val) => (val && val.length > 0 ? true : false),
            then: Yup.string().oneOf(
              [Yup.ref("password")],
              "Both password need to be the same"
            ),
          }),
        })}
        onSubmit={(values, { setSubmitting, resetForm, setErrors }) => {
          const url = Api.resetPassword;

          let data = {
            password: values["password"],
            uidb64: params.uidb64,
            token: params.token,
          };

          const config = {
            headers: {
              "X-CSRFToken": Cookies.get("csrftoken"),
            },
          };
          axios
            .post(url, data, config)
            .then((res) => {
              if (res.status === 200) {
                setSubmitting(false);
                setIsSuccess(true);
                resetForm();
              }
            })
            .catch((error) => {
              resetForm();
              setErrors({ submit: error.response.data["message"] });
              setSubmitting(false);
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
            <FormControl
              fullWidth
              error={Boolean(touched.password && errors.password)}
              className={classes.loginInput}
            >
              <InputLabel htmlFor="outlined-adornment-password-login">
                Password
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password-login"
                type={showPassword ? "text" : "password"}
                value={values.password}
                name="password"
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
              {touched.password && errors.password && (
                <FormHelperText
                  error
                  id="standard-weight-helper-text-password-login"
                >
                  {errors.password}
                </FormHelperText>
              )}
            </FormControl>

            <FormControl
              fullWidth
              error={Boolean(
                touched.passwordConfirmation && errors.passwordConfirmation
              )}
              className={classes.loginInput}
            >
              <InputLabel htmlFor="outlined-adornment-password-login">
                Confirm Password
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password-confirm-login"
                type={"password"}
                value={values.passwordConfirmation}
                name="passwordConfirmation"
                onBlur={handleBlur}
                onChange={handleChange}
                label="Confirm Password"
                inputProps={{
                  classes: {
                    notchedOutline: classes.notchedOutline,
                  },
                }}
              />
              {touched.passwordConfirmation && errors.passwordConfirmation && (
                <FormHelperText
                  error
                  id="standard-weight-helper-text-password-login"
                >
                  {errors.passwordConfirmation}
                </FormHelperText>
              )}
            </FormControl>

            {errors.submit && (
              <Box
                sx={{
                  mt: 3,
                }}
              >
                <FormHelperText error>{errors.submit}</FormHelperText>
              </Box>
            )}

            {isSuccess && (
              <Box
                sx={{
                  mt: 3,
                }}
              >
                <Alert
                  onClose={() => setIsSuccess(false)}
                  variant="filled"
                  severity="success"
                >
                  Password Reset Success
                </Alert>
              </Box>
            )}

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
              >
                Reset Password
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </React.Fragment>
  );
};

export default ResetPasswordForm;
