import React from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";
import { store } from "../redux/store";
import { menuItems } from "../menu-items";

export const useAuth = () => {
  return !!localStorage.getItem("token");
};

function PrivateRoute({ children }) {
  const auth = useAuth();
  return auth ? children : <Navigate to="/login" />;
}

export default PrivateRoute;

export const privateApiPOST = (url, data = {}) => {
  const token = localStorage.getItem("token");

  return axios({
    method: "POST",
    url,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`,
    },
    data,
  });
};

export const privateApiGET = (url) => {
  const token = localStorage.getItem("token");

  return axios({
    method: "GET",
    url,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`,
    },
  });
};
