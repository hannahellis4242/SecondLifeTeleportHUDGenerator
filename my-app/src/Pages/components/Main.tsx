import React from "react";
import classes from "./Main.module.css";

const Main: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <main className={classes.main}> {children} </main>;
};

export default Main;
