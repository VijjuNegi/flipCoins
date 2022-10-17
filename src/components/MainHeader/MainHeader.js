import React, { useState } from "react";

import Navigation from "./Navigation";
import classes from "../../utils/css/components/MainHeader.module.css";
import classesBtn from "../../utils/css/UI/Button.module.css";

const MainHeader = (props) => {
  const [isUser, setIsUser] = useState([]);

  const userData = ["RAM"];

  const logoutHandler = () => {
    console.log("button is click");
  };
  return (
    <header className={classes["main-header"]}>
      <h4>USER NAME : {userData}</h4>
      <button onClick={logoutHandler} className={classesBtn.button}>
        Logout
      </button>
      {/* <Navigation
        isLoggedIn={props.isAuthenticated}
        onLogout={props.onLogout}
      /> */}
    </header>
  );
};

export default MainHeader;
