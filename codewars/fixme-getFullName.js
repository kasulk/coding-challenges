class Dinglemouse {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getFullName() {
    const { firstName, lastName } = this;
    const isFullName = firstName && lastName;
    return `${firstName}${isFullName && " "}${lastName}`;
  }
}
