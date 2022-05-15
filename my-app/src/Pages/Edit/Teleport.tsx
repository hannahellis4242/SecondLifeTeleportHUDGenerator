import { FC, FormEvent, useRef } from "react";

const Teleport: FC<{
  destination: string;
  onSubmit: (newValue: string) => void;
}> = ({ destination, onSubmit }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const canSubmit = () => {
    const input = inputRef.current;
    const button = buttonRef.current;
    if (input && button) {
      button.disabled = input.value === destination;
    }
  };

  const submit = (event: FormEvent) => {
    event.preventDefault();
    const input = inputRef.current;
    if (input) {
      onSubmit(input.value);
    }
  };

  return (
    <form onSubmit={submit}>
      <label htmlFor="dest">Teleport to</label>
      <input
        ref={inputRef}
        id="dest"
        type="text"
        defaultValue={destination}
        onChange={canSubmit}
      />
      <button ref={buttonRef} type="submit" disabled={true}>
        change
      </button>
    </form>
  );
};

export default Teleport;
