// material-ui
import { styled } from "@mui/styles";
import config from "../../config";

//-----------------------|| AUTHENTICATION  WRAPPER ||-----------------------//

const AuthWrapper = styled("div")(({ theme }) => ({
  backgroundColor: config.backgroundColor,
  minHeight: "100vh",
}));

export default AuthWrapper;
