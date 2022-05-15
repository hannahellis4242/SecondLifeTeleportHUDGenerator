import { FunctionComponent } from "react";

const Teleport: FunctionComponent<{
  destination: string;
}> = ({ destination }) => {
  return <p>Teleport to {destination}</p>;
};

export default Teleport;
