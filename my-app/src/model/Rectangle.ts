export default class Rectangle {
  constructor(
    public left: number,
    public bottom: number,
    public right: number,
    public top: number
  ) {}
}

export const different = (a: Rectangle, b: Rectangle): boolean => {
  return (
    a.left !== b.left ||
    a.bottom !== b.bottom ||
    a.right !== b.right ||
    a.top !== b.top
  );
};

export const valid = (a: Rectangle): boolean => {
  return a.left < a.right && a.bottom < a.top;
};
