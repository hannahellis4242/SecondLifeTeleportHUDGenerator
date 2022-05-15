import { FunctionComponent } from "react";
import classes from "./Main.module.css";

const Main: FunctionComponent<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <main className={classes.main}> {children} </main>;
};

export default Main;
