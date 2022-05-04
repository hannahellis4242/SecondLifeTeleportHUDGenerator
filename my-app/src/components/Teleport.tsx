import React from "react";

const MenuTag: React.FC<{ destination: String }> = ({ destination }) => {
  return <p>teleport to ${destination}</p>;
};

export default MenuTag;
