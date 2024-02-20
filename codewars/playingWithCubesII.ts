export class Cube {
  private _side: number;

  constructor(num?: number) {
    if (num) this._side = Math.abs(num);
    else this._side = 0;
  }

  public getSide(): number {
    return this._side;
  }

  public setSide(value: number) {
    this._side = Math.abs(value);
  }
}
