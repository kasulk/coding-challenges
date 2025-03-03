export class Cuboid {
  public length: number;
  public width: number;
  public height: number;

  constructor(length: number, width: number, height: number) {
    this.length = length;
    this.width = width;
    this.height = height;
  }

  public get surfaceArea(): number {
    const { length, width, height } = this;
    return 2 * (length * width + length * height + width * height);
  }

  public get volume(): number {
    return this.length * this.width * this.height;
  }
}

export class Cube extends Cuboid {
  constructor(length: number) {
    super(length, length, length);
  }
}
