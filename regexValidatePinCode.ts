export class Kata {
  static validatePin(pin: string): boolean {
    return /^\d{4}$|^\d{6}$/.test(pin);
  }
}
