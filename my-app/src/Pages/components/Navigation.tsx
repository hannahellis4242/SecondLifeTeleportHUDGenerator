import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import Page from "../../model/Page";
import classes from "./Navigation.module.css";

const Navigation: FunctionComponent<{ active: Page }> = ({ active }) => {
  return (
    <nav className={classes.navigation}>
      <ul>
        <li className={active === "Home" ? classes.active : ""}>
          <Link to="/">Home</Link>
        </li>
        <li className={active === "View" ? classes.active : ""}>
          <Link to="/View">View</Link>
        </li>
        <li className={active === "Edit" ? classes.active : ""}>
          <Link to="/Edit">Edit</Link>
        </li>
        <li className={active === "Generate" ? classes.active : ""}>
          <Link to="/Generate">Generate</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
