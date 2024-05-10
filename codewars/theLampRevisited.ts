export class Lamp {
  color: string;
  on: boolean;

  constructor(color: string) {
    this.color = color;
    this.on = false;
  }

  toggleSwitch(): void {
    this.on = !this.on;
  }

  state(): string {
    return `The lamp is ${this.on ? "on" : "off"}.`;
  }
}
