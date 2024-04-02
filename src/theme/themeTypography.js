export const themeTypography = (theme) => {
  return {
    fontFamily: theme.customization.fontFamily,
    fontSize: theme.customization.fontSize,
    h6: {
      fontWeight: 500,
      color: theme.heading,
      fontSize: "1.75rem",
      lineHeight: 1.2,
    },
    h5: {
      fontSize: "2rem",
      color: theme.heading,
      fontWeight: 500,
      lineHeight: 1.2,
    },
    h4: {
      fontSize: "2.5rem",
      color: theme.heading,
      fontWeight: 500,
      lineHeight: 1.2,
    },
    h3: {
      fontSize: "3rem",
      color: theme.heading,
      fontWeight: 500,
      lineHeight: 1.2,
      letterSpacing: "0.2px",
    },
    h2: {
      fontSize: "3.6rem",
      color: theme.heading,
      fontWeight: 500,
      lineHeight: 1.2,
      letterSpacing: "0.2px",
    },
    h1: {
      fontSize: "6.4rem",
      lineHeight: "7.6rem",
      color: theme.heading,
      fontWeight: 700,
      letterSpacing: "0.3rem",
    },
    subtitle1: {
      fontSize: "2rem",
      fontWeight: 400,
      color: theme.textDark,
    },
    subtitle2: {
      fontSize: "1.8rem",
      fontWeight: 400,
      color: theme.darkTextSecondary,
      letterSpacing: "0.2px",
    },
    caption: {
      fontSize: "1.6rem",
      color: theme.darkTextSecondary,
      fontWeight: 400,
      lineHeight: 1.2,
    },
    body1: {
      fontSize: "2rem",
      fontWeight: 400,
      lineHeight: 1.2,
      color: theme.heading,
    },
    body2: {
      fontWeight: 400,
      fontSize: "1.6rem",
      lineHeight: 1.2,
      color: theme.darkTextPrimary,
    },
    button: {
      //textTransform: "capitalize",
    },
    customInput: {
      marginTop: 8,
      marginBottom: 8,
      "& > label": {
        top: "23px",
        left: 0,
        color: theme.grey500,
        '&[data-shrink="false"]': {
          top: "5px",
        },
      },
      "& > div > input": {
        padding: "30.5px 14px 11.5px !important",
      },
      "& legend": {
        display: "none",
      },
      "& fieldset": {
        top: 0,
      },
    },
    mainContent: {
      backgroundColor: "#f7f6f6", //theme.paper, //#f9f8f8
      width: "100%",
      minHeight: "calc(100vh - 88px)",
      flexGrow: 1,
      padding: "20px",
      marginTop: "88px",
      marginRight: "20px",
      letterSpacing: "0.2px",
      borderRadius: theme.customization.borderRadius + "px",
    },
    menuCaption: {
      fontSize: "0.875rem",
      fontWeight: 500,
      color: theme.heading,
      padding: "6px",
      textTransform: "capitalize",
      marginTop: "10px",
    },
    subMenuCaption: {
      fontSize: "0.6875rem",
      fontWeight: 500,
      color: theme.darkTextSecondary,
      textTransform: "capitalize",
    },
    commonAvatar: {
      cursor: "pointer",
      borderRadius: "8px",
    },
    smallAvatar: {
      width: "22px",
      height: "22px",
      fontSize: "1rem",
    },
    mediumAvatar: {
      width: "34px",
      height: "34px",
      fontSize: "1.2rem",
    },
    largeAvatar: {
      width: "44px",
      height: "44px",
      fontSize: "1.5rem",
    },
  };
};
