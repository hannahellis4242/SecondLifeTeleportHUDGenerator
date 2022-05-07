import React from "react";
import { Link } from "react-router-dom";

const Navigation: React.FC = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/View">View</Link>
        </li>
        <li>
          <Link to="/Edit">Edit</Link>
        </li>
        <li>
          <Link to="/Generate">Generate</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
