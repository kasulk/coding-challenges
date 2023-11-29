class Cube {
  constructor(length) {
    this.length = length;
  }

  get surfaceArea() {
    return 6 * this.length ** 2;
  }

  get volume() {
    return this.length ** 3;
  }

  set surfaceArea(newValue) {
    this.length = (newValue / 6) ** (1 / 2); // square root
  }

  set volume(newValue) {
    this.length = newValue ** (1 / 3); // cube root
  }
}
