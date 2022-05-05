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
