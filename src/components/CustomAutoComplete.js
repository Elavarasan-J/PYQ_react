import React from "react";
import PropTypes from "prop-types";
import {
  Autocomplete,
  TextField,
  Paper,
  CircularProgress,
} from "@mui/material";
import { validateArrayData } from "../utils";
import globalUseStyles from "./GlobalStyles";

const CustomAutoComplete = ({
  isLoading,
  attributeName,
  options,
  ...others
}) => {
  const globalClasses = globalUseStyles();
  return (
    <Autocomplete
      className={globalClasses.inputTopLabel}
      disablePortal={true}
      options={validateArrayData(options) ? options : []}
      {...others}
      PaperComponent={({ children }) => (
        <Paper className={globalClasses.autoCompleteDropdown}>{children}</Paper>
      )}
      renderInput={(params) => (
        <>
          {isLoading && (
            <CircularProgress
              className={globalClasses.inputSpinner}
              size={16}
              color="secondary"
            />
          )}
          <TextField
            {...params}
            color="secondary"
            variant="outlined"
            placeholder={`Choose ${attributeName}`}
            label={`${attributeName}`}
          />
        </>
      )}
    />
  );
};

CustomAutoComplete.propTypes = {
  isLoading: PropTypes.bool,
  attributeName: PropTypes.string,
};

CustomAutoComplete.defaultProps = {
  isLoading: false,
  attributeName: "",
};

export default CustomAutoComplete;
