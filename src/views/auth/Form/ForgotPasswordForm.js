import React from "react";

// material-ui
import { makeStyles } from "@mui/styles";
import {
  Box,
  Button,
  FormControl,
  FormHelperText,
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

const ForgotPasswordForm = () => {
  const classes = useStyles();

  const [isEmailSent, setIsEmailSent] = React.useState(false);

  return (
    <React.Fragment>
      <Formik
        initialValues={{
          email: "",
          submit: null,
        }}
        validationSchema={Yup.object().shape({
          email: Yup.string()
            .email("Must be a valid email")
            .max(255)
            .required("Email is required"),
        })}
        onSubmit={(values, { setSubmitting, resetForm, setErrors }) => {
          const url = Api.forgotPassword;

          const config = {
            headers: {
              "X-CSRFToken": Cookies.get("csrftoken"),
            },
          };

          axios
            .post(url, values, config)
            .then((res) => {
              if (res.status === 200) {
                resetForm();
                setSubmitting(false);
                setIsEmailSent(true);
              }
            })
            .catch((error) => {
              console.log(error);
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
              error={Boolean(touched.email && errors.email)}
              className={classes.loginInput}
            >
              <InputLabel htmlFor="outlined-adornment-email-login">
                Email Address
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-email-login"
                type="email"
                value={values.email}
                name="email"
                onBlur={handleBlur}
                onChange={handleChange}
                label="Email Address"
                inputProps={{
                  classes: {
                    notchedOutline: classes.notchedOutline,
                  },
                }}
              />
              {touched.email && errors.email && (
                <FormHelperText
                  error
                  id="standard-weight-helper-text-email-login"
                >
                  {errors.email}
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

            {isEmailSent && (
              <Box
                sx={{
                  mt: 3,
                }}
              >
                <Alert
                  onClose={() => setIsEmailSent(false)}
                  variant="filled"
                  severity="success"
                >
                  Email Sent
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
                Send Email
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </React.Fragment>
  );
};

export default ForgotPasswordForm;
