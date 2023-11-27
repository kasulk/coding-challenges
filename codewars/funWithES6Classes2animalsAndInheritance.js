class Shark extends Animal {
  constructor(name, age, status) {
    super(name, age, status);
    this.legs = 0;
    this.species = "shark";
    this.status = status;
  }
}

class Cat extends Animal {
  constructor(name, age, status) {
    super(name, age, status);
    this.legs = 4;
    this.species = "cat";
    this.status = status;
  }

  introduce() {
    return super.introduce() + "  Meow meow!";
  }
}

class Dog extends Animal {
  constructor(name, age, status, master) {
    super(name, age, status);
    this.master = master;
    this.legs = 4;
    this.species = "dog";
    this.status = status;
  }

  greetMaster() {
    return `Hello ${this.master}`;
  }
}
