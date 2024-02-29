"use client";
import { useContext } from "react";

import { Login, JoinedComponent } from "../../components";
import { AuthContext } from "../../../context/AuthContext";

const Main = () => {
  const { authenicatedUser } = useContext(AuthContext);

  return <>{authenicatedUser === null ? <Login /> : <JoinedComponent />}</>;
};

export default Main;
