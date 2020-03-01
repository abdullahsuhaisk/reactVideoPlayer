export const setToken = res => {
  const Token = res.user.ma;
  const RefToken = res.user.refreshToken;
  localStorage.setItem("token", Token);
  localStorage.setItem("refToken", RefToken);
  // console.log("Tokens Setted", Token, RefToken);
};
export const isLogin = () => {
  if (localStorage.getItem("token")) {
    return true;
  }
  return false;
};
