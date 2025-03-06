class Animal {
  _type = "";
  _name = "";

  constructor(name, type) {
    this._name = name;
    this._type = type;
  }

  get name() {
    return this._name;
  }

  get type() {
    return this._type;
  }

  set name(newName) {
    this._name = newName;
  }

  toString() {
    return `${this._name} is a ${this._type}`;
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
