class Quark {
  color = "";
  flavor = "";
  baryon_number = 1 / 3;

  constructor(color, flavor) {
    this.color = color;
    this.flavor = flavor;
  }

  interact(other) {
    const temp = this.color;
    this.color = other.color;
    other.color = temp;
  }
}
