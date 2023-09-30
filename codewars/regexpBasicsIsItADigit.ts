// Necessary, keep it here.
interface String {
  digit(): boolean;
}

String.prototype.digit = function (): boolean {
  return /^[0-9]$/.test(this.toString());
};
