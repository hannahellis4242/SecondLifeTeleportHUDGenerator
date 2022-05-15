import { FunctionComponent } from "react";

const Teleport: FunctionComponent<{ destination: String }> = ({
  destination,
}) => {
  return <p>Teleport to {destination}</p>;
};

export default Teleport;
