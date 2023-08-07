import React, { useState } from "react";

const Login = () => {
  const [isLogin, setIsLogin] = useState(false);

  function onClickHandler() {
    setIsLogin(!isLogin);
  }
  return (
    <button onClick={onClickHandler}>{isLogin ? "Logout" : "Login"}</button>
  );
};

export default Login;
