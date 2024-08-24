class Block {
  constructor(data) {
    [this.width, this.length, this.height] = data;
    this.data = data;
  }

  getWidth() {
    return this.width;
  }
  getLength() {
    return this.length;
  }
  getHeight() {
    return this.height;
  }
  getVolume() {
    return this.data.reduce((acc, curr) => acc * curr, 1);
  }
  getSurfaceArea() {
    return (
      2 *
      (this.width * this.height +
        this.height * this.length +
        this.width * this.length)
    );
  }
}
