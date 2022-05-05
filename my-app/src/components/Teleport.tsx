import React from "react";

const MenuTag: React.FC<{ destination: String }> = ({ destination }) => {
  return <p>Teleport to {destination}</p>;
};

export default MenuTag;
