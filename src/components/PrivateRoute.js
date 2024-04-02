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

export const privateApiPOSTWithBaseFilter = (
  url,
  data = {},
  additionalObj = {}
) => {
  const token = localStorage.getItem("token");
  const appState = store.getState()?.app;
  const {
    activeRetailer,
    activeCategory,
    activeSubCategory,
    selectedAttributeData,
  } = appState;

  if (
    activeRetailer?.length === 0 ||
    activeCategory?.length === 0 ||
    activeSubCategory?.length === 0
  ) {
    return Promise.reject(new Error("MISSING BASE FILTER FIELDS"));
  }

  const payload = {
    category_id: activeCategory.map((each) => each?.id),
    sub_category_id: activeSubCategory.map((each) => each?.id),
    retailer_id: activeRetailer.map((each) => each?.id),
    attribute: selectedAttributeData,
    section: menuItems.find((each) => each.url === window.location.pathname)
      ?.id,
    ...data,
  };

  return axios({
    method: "POST",
    url,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`,
    },
    data: payload,
    ...additionalObj,
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
