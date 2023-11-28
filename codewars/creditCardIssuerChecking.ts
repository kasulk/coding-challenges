enum Issuer {
  VISA = "VISA",
  AMEX = "AMEX",
  Mastercard = "Mastercard",
  Discover = "Discover",
  Unknown = "Unknown",
}
// import { Issuer } from "./preloaded";
export const getIssuer = (x: number): Issuer => {
  const numStr = x.toString();

  if (
    numStr.length === 15 &&
    (numStr.startsWith("34") || numStr.startsWith("37"))
  )
    return Issuer.AMEX;

  if ((numStr.length === 13 || numStr.length === 16) && numStr.startsWith("4"))
    return Issuer.VISA;

  if (numStr.length === 16) {
    if (numStr.startsWith("6011")) return Issuer.Discover;
    if (
      numStr.startsWith("51") ||
      numStr.startsWith("52") ||
      numStr.startsWith("53") ||
      numStr.startsWith("54") ||
      numStr.startsWith("55")
    )
      return Issuer.Mastercard;
  }

  return Issuer.Unknown;
};
