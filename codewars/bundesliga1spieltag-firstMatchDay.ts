export function table(results: string[]): string {
  // for each team create an object with
  // team name, goals, wins, ties, losses and points
  // split the lines of the input array into arrays of values

  //

  //   console.log(results);

  //   function TeamTableData(team, numMatches, won, tie, lost, goalsDiff, points) {
  function TeamTableData(team) {
    this.team = team;
    this.numMatches = 0;
    this.won = 0;
    this.tie = 0;
    this.lost = 0;
    // this.goalsDiff = "0:0";
    this.goalsScored = 0;
    this.goalsReceived = 0;
    this.points = 0;
  }

  const pimpedResults = results.map((result) => {
    return convertStrResultToObj(result);
  });
  // .filter((result) => result); // remove results for not played matches
  console.log(pimpedResults);

  const table = [];
  //// result: ['FC Bayern Muenchen', 6, 'Werder Bremen', 0]
  // { 'FC Bayern Muenchen': 6, 'Werder Bremen': 0 }
  pimpedResults.forEach((result) => {
    if (result) {
      const output = Object.keys(result).map((team, i) => {
        const blub = new TeamTableData(team);
        const opponentIndex = i === 0 ? 1 : 0;
        const opponent = Object.keys(result)[opponentIndex];

        blub.numMatches++;
        blub.goalsScored += result[team];
        blub.goalsReceived += result[opponent];
        return blub; // [{team: 'FCB', ...},{}]
      });
      //   console.log(output);
      //
      if (output[0].goalsScored > output[1].goalsScored) {
        output[0].won++;
        output[0].points += 3;
        output[1].lost++;
      } else if (output[0].goalsScored < output[1].goalsScored) {
        output[1].won++;
        output[1].points += 3;
        output[0].lost++;
      } else {
        output[0].tie++;
        output[1].tie++;
        output[0].points++;
        output[1].points++;
      }

      console.log(output);
    }
    // const [homeTeam, awayTeam] = Object.keys(result);
  });

  return "";
}

table([
  "6:0 FC Bayern Muenchen - Werder Bremen",
  "-:- Eintracht Frankfurt - Schalke 04",
  "-:- FC Augsburg - VfL Wolfsburg",
  "-:- Hamburger SV - FC Ingolstadt",
  "1:1 1. FC Koeln - SV Darmstadt",
  "-:- Borussia Dortmund - FSV Mainz 05",
  "2:3 Borussia Moenchengladbach - Bayer Leverkusen",
  "-:- Hertha BSC Berlin - SC Freiburg",
  "-:- TSG 1899 Hoffenheim - RasenBall Leipzig",
]);

/**
 *
 * @param {string} result e.g. '6:0 FC Bayern Muenchen - Werder Bremen'
 /////* @returns {object} e.g. { 'FC Bayern Muenchen': 6, 'Werder Bremen': 0 }
 */
function convertStrResultToObj(result: string) {
  if (result[0] === "-") return null; // match not played
  //   interface IResultObj {
  //     homeTeam?: number;
  //     awayTeam?: number;
  //   }

  // const resultObj: IResultObj = {};
  const [score, ...rest] = result.split(" ");
  const [homeTeam, awayTeam] = rest.slice(1).join(" ").split(" - ");
  const scores = score.split(":").map(Number);

  // resultObj[homeTeam] = scores[0];
  // resultObj[awayTeam] = scores[1];

  //   return [homeTeam, scores[0], awayTeam, scores[1]];
  return { [homeTeam]: scores[0], [awayTeam]: scores[1] };

  // return resultObj;
}
