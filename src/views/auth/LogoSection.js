import React from "react";

// material-ui
import { ButtonBase } from "@mui/material";

//-----------------------|| MAIN LOGO ||-----------------------//

const LogoSection = () => {
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <ButtonBase
      disableRipple
      onClick={() => openInNewTab("https://www.ongil.ai/")}
    >
      <img
        src={"/static/images/ongil-2x.png"}
        alt="Ongil"
        style={{ width: "215px" }}
      />
    </ButtonBase>
  );
};

export default LogoSection;
