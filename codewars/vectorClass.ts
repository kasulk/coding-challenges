export class Vector {
  components: number[];

  constructor(components: number[]) {
    this.components = components;
  }

  public add({ components }: Vector): Vector {
    this.checkLengths(components, "add");
    const componentsSums = this.components.map(
      (comp, i) => comp + components[i]
    );
    return new Vector(componentsSums);
  }

  public subtract({ components }: Vector): Vector {
    this.checkLengths(components, "subtract");
    const componentsDiffs = this.components.map(
      (comp, i) => comp - components[i]
    );
    return new Vector(componentsDiffs);
  }

  public dot({ components }: Vector): number {
    this.checkLengths(components, "dot");
    return this.components.reduce(
      (sum, comp, i) => sum + comp * components[i],
      0
    );
  }

  public norm(): number {
    const squaresSum = this.components.reduce(
      (sum, comp) => sum + comp ** 2,
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

  private checkLengths(components: number[], method: string): never | void {
    if (this.components.length !== components.length) {
      throw new Error(
        `Hey! To ${method} 2 vectors, both vectors must have the same dimension (number of components)!`
      );
    }
  }
}
