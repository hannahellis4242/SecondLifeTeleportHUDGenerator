import React from "react";
import Action from "../model/Action";

class TeleportActionInput extends React.Component<{ onChange?: () => void }> {
  onChange?: () => void;
  ref: React.RefObject<TeleportActionInput>;
  destination: string;
  constructor(props: { onChange?: () => void }) {
    super(props);
    this.ref = React.createRef();
    this.destination = "";
    this.onChange = props.onChange;
  }
  render() {
    const onChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
      this.destination = target.value;
      if (this.onChange) {
        this.onChange();
      }
    };

    return (
      <section>
        <label htmlFor="dest">Destintation : </label>
        <input type="text" id="dest" onChange={onChange} />
      </section>
    );
  }
}

export default TeleportActionInput;
