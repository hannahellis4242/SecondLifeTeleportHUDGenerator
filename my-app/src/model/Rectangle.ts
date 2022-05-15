export default class Rectangle {
  constructor(
    public left: number,
    public bottom: number,
    public right: number,
    public top: number
  ) {}

  isValid(): boolean {
    return this.left < this.right && this.bottom < this.top;
  }
}

export const different = (a: Rectangle, b: Rectangle): boolean => {
  return (
    a.left !== b.left ||
    a.bottom !== b.bottom ||
    a.right !== b.right ||
    a.top !== b.top
  );
};
