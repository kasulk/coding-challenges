export class God {
  /**
   * @returns Human[]
   */
  static create() {
    const adam = new Man("Adam");
    const eve = new Woman("Eve");
    return [adam, eve];
  }
}

export class Human {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}

export class Man extends Human {
  constructor(name: string) {
    super(name);
  }
}

export class Woman extends Human {
  constructor(name: string) {
    super(name);
  }
}
