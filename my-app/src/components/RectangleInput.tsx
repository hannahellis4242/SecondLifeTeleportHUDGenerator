import React from "react";
import Rectangle from "../model/Rectangle";

type ChangeDirection = "left" | "right" | "top" | "bottom";
class RectangleInput extends React.Component<{ onChange?: () => void }> {
  onChange?: () => void;
  ref: React.RefObject<RectangleInput>;
  rectangle: Rectangle;
  constructor(props: { onChange?: () => void }) {
    super(props);
    this.ref = React.createRef();
    this.rectangle = new Rectangle(0, 0, 1, 1);
    this.onChange = props.onChange;
  }
  render() {
    const onChange = (
      direction: ChangeDirection,
      { target }: React.ChangeEvent<HTMLInputElement>
    ) => {
      switch (direction) {
        case "left":
          this.rectangle.left = Number(target.value);
          break;
        case "right":
          this.rectangle.right = Number(target.value);
          break;
        case "top":
          this.rectangle.top = Number(target.value);
          break;
        case "bottom":
          this.rectangle.bottom = Number(target.value);
          break;
      }
      if (this.onChange) {
        this.onChange();
      }
    };

    return (
      <section>
        <label htmlFor="left">left:</label>
        <input
          type="number"
          id="left"
          name="left"
          min={0}
          max={this.rectangle.right}
          step={0.01}
          onChange={(event) => onChange("left", event)}
          defaultValue={this.rectangle.left}
        />
        <label htmlFor="bottom">bottom:</label>
        <input
          type="number"
          id="bottom"
          name="bottom"
          min={0}
          max={this.rectangle.top}
          step={0.01}
          onChange={(event) => onChange("bottom", event)}
          defaultValue={this.rectangle.bottom}
        />
        <label htmlFor="right">right:</label>
        <input
          type="number"
          id="right"
          name="right"
          min={this.rectangle.left}
          max={1}
          step={0.01}
          onChange={(event) => onChange("right", event)}
          defaultValue={this.rectangle.right}
        />
        <label htmlFor="top">top:</label>
        <input
          type="number"
          id="top"
          name="top"
          min={this.rectangle.bottom}
          max={1}
          step={0.01}
          onChange={(event) => onChange("top", event)}
          defaultValue={this.rectangle.top}
        />
      </section>
    );
  }
}

export default RectangleInput;
