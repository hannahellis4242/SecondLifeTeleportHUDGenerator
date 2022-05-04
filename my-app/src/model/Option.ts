import Action from "./Action";
import Rectangle from "./Rectangle";

export default interface Option {
  id: string;
  rect?: Rectangle;
  label?: string;
  action: Action;
}
