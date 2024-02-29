"use client";
import { useContext } from "react";

import { AuthContext } from "../../context/AuthContext";
import { Login, StartedComponent } from "../components";

// const apiKey = "ayr4n3fueb58";

const Main = () => {
  const { authenicatedUser } = useContext(AuthContext);

  return <>{authenicatedUser === null ? <Login /> : <StartedComponent />}</>;
};

export default Main;
