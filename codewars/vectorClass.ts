export class Vector {
  components: number[];

  constructor(components: number[]) {
    this.components = components;
  }

  private checkLengths(components: number[]): never | void {
    if (this.components.length !== components.length) {
      throw new Error("Hey! Both vectors must have the same length, man!");
    }
  }

  public add({ components }: Vector): Vector {
    this.checkLengths(components);
    const newComponents = this.components.map(
      (comp, i) => comp + components[i]
    );
    return new Vector(newComponents);
  }

  public subtract({ components }: Vector): Vector {
    this.checkLengths(components);
    const newComponents = this.components.map(
      (comp, i) => comp - components[i]
    );
    return new Vector(newComponents);
  }

  public dot({ components }: Vector): number {
    this.checkLengths(components);
    return this.components.reduce(
      (sum, curr, i) => sum + curr * components[i],
      0
    );
  }

  public norm(): number {
    const squaresSum = this.components.reduce(
      (acc, curr) => acc + curr ** 2,
      0
    );
    return Math.sqrt(squaresSum);
  }

  public equals({ components }: Vector): boolean {
    return JSON.stringify(this.components) === JSON.stringify(components);
  }

  public toString(): string {
    return `(${this.components.join(",")})`;
  }
}
