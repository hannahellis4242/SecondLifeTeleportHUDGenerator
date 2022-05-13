import React from "react";

const Teleport: React.FC<{ destination: String }> = ({ destination }) => {
  return <p>Teleport to {destination}</p>;
};

export default Teleport;
