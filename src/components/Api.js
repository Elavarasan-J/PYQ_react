export default {
  // Auth endpoints
  login: "/api/v1/user/login/",
  register: "/api/v1/user/signup/",
  logout: "/api/v1/user/logout/",
  profile: "/api/v1/user/profile/",
  forgotPassword: "/api/v1/user/forgot-password/",
  resetPassword: "/api/v1/user/reset-password/",

  // Brand Analysis endpoints
  getCartTotal: "/api/get-count-for-keywords",
  getKeywordsByTopic: "/api/get-keywords?topic=10",
  getKeywordsBySubject: "/api/get-keywords?subject=10",
};
