export function table(results: string[]): string {
  // for each team create an object with
  // team name, goals, wins, ties, losses and points
  // split the lines of the input array into arrays of values

  //   console.log(results);

  const resultObjs = results.map((result) => {
    let resultObj = {};
    const [score, ...rest] = result.split(" ");
    const [homeTeam, awayTeam] = rest.slice(1).join(" ").split(" - ");
    const scores = score.split(":");

    resultObj[homeTeam] = scores[0];
    resultObj[awayTeam] = scores[1];

    // console.log(resultObj);
    return resultObj;
  });

  return "";
}

table([
  "6:0 FC Bayern Muenchen - Werder Bremen",
  "-:- Eintracht Frankfurt - Schalke 04",
  "-:- FC Augsburg - VfL Wolfsburg",
  "-:- Hamburger SV - FC Ingolstadt",
  "-:- 1. FC Koeln - SV Darmstadt",
  "-:- Borussia Dortmund - FSV Mainz 05",
  "-:- Borussia Moenchengladbach - Bayer Leverkusen",
  "-:- Hertha BSC Berlin - SC Freiburg",
  "-:- TSG 1899 Hoffenheim - RasenBall Leipzig",
]);
