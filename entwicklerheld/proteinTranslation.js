export function translate(rnaStrand) {
  const protein = [];
  let currCodon = "";

  if (!rnaStrand) return protein;

  for (let i = 0; i <= rnaStrand.length; i++) {
    const char = rnaStrand[i];
    const isFirstChar = !i;
    const isLastChar = i === rnaStrand.length;
    const nextCodonBegins = !(i % 3);

    if ((!isFirstChar && nextCodonBegins) || isLastChar) {
      const foundAminoAcid = getAminoAcid(currCodon);

      if (!foundAminoAcid) throw new Error("Invalid codon");
      if (foundAminoAcid === "STOP") break;

      protein.push(foundAminoAcid);
      currCodon = "";
    }

    currCodon += char;
  }

  return protein;
}

function getAminoAcid(codon) {
  const codonAminoAcidDict = {
    Methionine: ["AUG"],
    Phenylalanine: ["UUU", "UUC"],
    Leucine: ["UUA", "UUG"],
    Serine: ["UCU", "UCC", "UCA", "UCG"],
    Tyrosine: ["UAU", "UAC"],
    Cysteine: ["UGU", "UGC"],
    Tryptophan: ["UGG"],
    STOP: ["UAA", "UAG", "UGA"],
  };

  for (const aminoAcid in codonAminoAcidDict) {
    const currCodons = codonAminoAcidDict[aminoAcid];
    if (currCodons.includes(codon)) {
      if (aminoAcid === "STOP") return "STOP";
      return aminoAcid;
    }
  }

  return null;
}

///
// create some kind of map for the items/names
/// obj

// cut input str into parts of 3
// turn into array
// loop through arr
// check each item
// return its name to the arr
// if name is 'STOP', quit the process, return the result
// if item is not found, throw error

// translate("AUGUUUUCU");
translate("AUGU");
