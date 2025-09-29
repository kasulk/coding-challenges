export function translate(rnaStrand) {
  const protein = [];
  let currCodon = "";

  if (!rnaStrand) return protein;

  for (const char of rnaStrand) {
    currCodon += char;
    const nextCodonBegins = currCodon.length === 3;

    if (nextCodonBegins) {
      const foundAminoAcid = getAminoAcid(currCodon);
      currCodon = "";

      if (!foundAminoAcid) throwInvalidCodonError();
      if (foundAminoAcid === "STOP") break;

      protein.push(foundAminoAcid);
    }
  }

  if (currCodon) throwInvalidCodonError();

  return protein;
}

function getAminoAcid(codon) {
  const dict = {
    Methionine: ["AUG"],
    Phenylalanine: ["UUU", "UUC"],
    Leucine: ["UUA", "UUG"],
    Serine: ["UCU", "UCC", "UCA", "UCG"],
    Tyrosine: ["UAU", "UAC"],
    Cysteine: ["UGU", "UGC"],
    Tryptophan: ["UGG"],
    STOP: ["UAA", "UAG", "UGA"],
  };

  for (const aminoAcid in dict) {
    const currCodons = dict[aminoAcid];
    if (currCodons.includes(codon)) {
      if (aminoAcid === "STOP") return "STOP";
      return aminoAcid;
    }
  }

  return null;
}

function throwInvalidCodonError() {
  throw new Error("Invalid codon");
}
