class Animal {
  type = "";
  name = "";

  constructor(name, type) {
    this.name = name;
    this.type = type;
  }

  toString() {
    return `${this.name} is a ${this.type}`;
  }

  set name(newName) {
    this.name = newName;
  }
}
