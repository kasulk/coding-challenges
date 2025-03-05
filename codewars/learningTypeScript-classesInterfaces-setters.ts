declare var ICuboid: {
  new (length: number): ICuboid;
};

interface ICuboid {
  /** Length of the cube */
  length: number;
  /** Surface area of the cube */
  surfaceArea: number;
  /** Volume of the cube */
  volume: number;
}

export class Cube implements ICuboid {
  length: number;

  constructor(length: number) {
    this.length = length;
  }

  get surfaceArea(): number {
    return this.length * this.length * 6;
  }

  get volume(): number {
    return this.length ** 3;
  }

  set surfaceArea(newSurfaceArea: number) {
    this.length = (newSurfaceArea / 6) ** (1 / 2);
  }

  set volume(newVolume: number) {
    this.length = newVolume ** (1 / 3);
  }
}
