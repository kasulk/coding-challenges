class Cuboid {
  constructor(length, width, height) {
    this.length = length;
    this.width = width;
    this.height = height;
  }

  get surfaceArea() {
    const { length: a, width: b, height: c } = this;
    return 2 * (a * b + a * c + b * c);
  }

  get volume() {
    return this.length * this.width * this.height;
  }
}

class Cube extends Cuboid {
  constructor(length) {
    super(length, length, length);
  }
}
