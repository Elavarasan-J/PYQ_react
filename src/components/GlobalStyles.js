import { makeStyles } from "@mui/styles";
import { themeColors } from "../theme/themeColors";
import config from "../config";
import { plotColors } from "../constants";

const globalUseStyles = makeStyles((theme) => ({
  inputTopLabel: {
    "& .MuiInputLabel-root": {
      color: theme.palette.primary.dark,
      //fontSize: "16px",
    },
    "& .MuiInputBase-sizeSmall": {
      paddingTop: "10px !important",
    },
    "& .MuiOutlinedInput-notchedOutline": {
      borderRadius: "8px",
    },
  },
  // activeState: {
  //   backgroundColor: `${theme.palette.primary.light} !important`,
  //   color: `${theme.palette.primary.dark} !important`,
  // },
  autoCompleteDropdown: {
    color: theme.palette.common.black,
    marginTop: "1px",
    // border: `1px solid #cccccc`,
    // borderRadius: `${config.borderRadiusSmall}`,
  },
  exportButton: {
    position: "absolute",
    right: "20px",
    zIndex: 5,
    top: "50%",
    marginTop: "-16px",
    padding: "5px 10px",
    backgroundColor: theme.palette.primary.light,
    //borderColor: theme.palette.primary.dark,
    borderColor: "#fe9d0b",
    color: theme.palette.primary.dark,
  },
  itemCenter: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  inputSpinner: {
    position: "absolute",
    top: "50%",
    right: "45px",
    marginTop: "-8px",
    zIndex: 3,
  },
  inputLabel: {
    marginBottom: "5px !important",
    fontWeight: "500 !important",
  },
  customLegends: {
    listStyle: "none",
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    padding: 0,
    margin: 0,
    position: "absolute",
    width: "100%",
    zIndex: 3,
    maxHeight: "40px",
    overflow: "hidden",
    "& li": {
      display: "flex",
      alignItems: "center",
      fontSize: "13px",
      lineHeight: "20px",
      "& span": {
        display: "block",
        width: "10px",
        height: "10px",
        marginRight: "5px",
        borderRadius: "50%",
      },
      "& p": {
        margin: 0,
        maxWidth: "160px",
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
      },
      "& + li": {
        marginLeft: "10px",
      },
    },
  },
  inputButton: {
    height: "42px",
    minWidth: "80px",
  },
  reviewListing: {
    padding: "5px 0",
    "& >div": {
      padding: "25px",
      "&:nth-child(even)": {
        backgroundColor: "#f7f7f7",
      },
    },
    [theme.breakpoints.up("md")]: {
      minWidth: "768px",
    },
  },
  starRating: {
    width: "16px !important",
    height: "16px !important",
    color: plotColors.orange,
  },
  sentimentRow: {
    display: "flex",
    alignItems: "center",
    marginLeft: "15px",
    fontWeight: 600,
    letterSpacing: "0.2px",
  },
  sentimentPositive: {
    color: plotColors.greenAlt,
  },
  sentimentNegative: {
    color: plotColors.red,
  },
  sentimentNeutral: {
    color: plotColors.orange,
  },
  mainSearchDisabled: {
    "& .wrapper": {
      opacity: 0.4,
      pointerEvents: "none",
    },
  },
  mainSearch: {
    "& .wrapper": {
      zIndex: "10 !important",
      "& >div + div": {
        fontSize: "14px",
        lineHeight: "22px",
        maxHeight: "310px",
        overflowY: "auto",
        "& .search-icon": {
          width: "20px",
          height: "20px",
          marginBottom: "0",
          marginTop: "0",
        },
      },
      "& ul >li": {
        cursor: "default",
      },
    },
    "& .search-icon": {
      width: "28px",
      height: "28px",
      zIndex: 11,
    },
    "& input": {
      fontWeight: 500,
      "&:focus": {
        borderColor: "#c1761f !important",
      },
    },
  },
  mainSearchRefreshButton: {
    position: "absolute",
    top: "50%",
    marginTop: "-20px",
    right: "35px",
    opacity: 0.4,
    zIndex: 12,
    "&:hover": {
      opacity: 0.8,
    },
  },
}));

export default globalUseStyles;
