class Labrador extends Dog {
  constructor(name, age, gender, master) {
    super(name, age, gender);
    this.species = "Labrador";
    this.size = "Large";
    this.master = master;
    this.loyal = true;
  }
}
