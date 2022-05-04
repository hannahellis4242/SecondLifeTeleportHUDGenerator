import Action from "./Action";
import Rectangle from "./Rectangle";

export default interface Option {
  rect?: Rectangle;
  label?: string;
  action: Action;
}
