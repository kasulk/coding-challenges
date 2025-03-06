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

// TESTS
const chai = require("chai");
const assert = chai.assert;

describe("Basic tests", () => {
  const animal = new Animal("Max", "dog");

  it("should test Animal properties and toString() method", () => {
    assert.strictEqual(animal.name, "Max");
    assert.strictEqual(animal.type, "dog");
    assert.strictEqual(animal.toString(), "Max is a dog");
  });

  it("should test Animal name setter", () => {
    animal.name = "Horst";
    assert.strictEqual(animal.name, "Horst");
  });
});
