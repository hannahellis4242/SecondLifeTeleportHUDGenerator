import { forwardRef } from "react";

const TeleportEdit = forwardRef<
  HTMLInputElement,
  {
    destination: string;
    onChange: () => void;
  }
>(({ destination, onChange }, ref) => {
  return (
    <p>
      <label htmlFor="dest">Teleport to </label>
      <input
        ref={ref}
        id="dest"
        type="text"
        defaultValue={destination}
        onChange={onChange}
      />
    </p>
  );
});

export default TeleportEdit;
