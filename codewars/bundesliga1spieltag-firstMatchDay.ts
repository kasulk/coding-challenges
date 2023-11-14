export function table(results: string[]): string {
  //
  interface ITableData {
    team: string;
    numMatches: number;
    won: number;
    tie: number;
    lost: number;
    goalsScored: number;
    goalsReceived: number;
    goalsDiff: number;
    points: number;
  }
  //

  function TeamTableData(this: ITableData, team: string) {
    this.team = team;
    this.numMatches = 0;
    this.won = 0;
    this.tie = 0;
    this.lost = 0;
    this.goalsScored = 0;
    this.goalsReceived = 0;
    this.goalsDiff = 0;
    this.points = 0;
  }

  const pimpedResults = results.map((result) => {
    return convertStrResultToObj(result);
  });

  // console.log(pimpedResults);

  // const table = [];
  let calculatedTableData: ITableData[] = [];
  // result --> { 'FC Bayern Muenchen': 6, 'Werder Bremen': 0 }
  pimpedResults.forEach(
    (result) => {
      // if (result) {
      const [homeTeam, awayTeam] = Object.keys(result).map((team, i) => {
        const blub = new (TeamTableData as any)(team); // TS for 'new TeamTableData(team)'
        const opponentIndex = i === 0 ? 1 : 0;
        const opponent = Object.keys(result)[opponentIndex];

        // console.log("result[team]", result[team], typeof result[team]);
        // console.log(blub); //! top

        if (!isNaN(result[team])) {
          // if (typeof result[team] === "number") {
          blub.numMatches++;
          blub.goalsScored += result[team];
          blub.goalsReceived += result[opponent];
          blub.goalsDiff = blub.goalsScored - blub.goalsReceived;
          // console.log(blub); //? top
          // return blub; // [{team: 'FCB', ...},{}]
        }
        return blub; // [{team: 'FCB', ...},{}]
      });

      // console.log("homeTeam:", homeTeam);

      // if (homeTeam.goalsScored) {
      if (homeTeam.numMatches) {
        // if (homeTeam) {
        if (homeTeam.goalsScored > awayTeam.goalsScored) {
          homeTeam.won++;
          homeTeam.points += 3;
          awayTeam.lost++;
        } else if (homeTeam.goalsScored < awayTeam.goalsScored) {
          awayTeam.won++;
          awayTeam.points += 3;
          homeTeam.lost++;
        } else {
          homeTeam.tie++;
          awayTeam.tie++;
          homeTeam.points++;
          awayTeam.points++;
        }
      }

      calculatedTableData = [...calculatedTableData, homeTeam, awayTeam];
    }
    // }
  );
  // console.log(calculatedTableData);

  // sort table data
  calculatedTableData.sort((a, b) => {
    if (a.points !== b.points) return b.points - a.points;
    else if (a.goalsDiff !== b.goalsDiff) return b.goalsDiff - a.goalsDiff;
    else if (a.goalsScored !== b.goalsScored)
      return b.goalsScored - a.goalsScored;
    else return a.team.localeCompare(b.team);
  });

  // console.log(calculatedTableData);

  // calculate position number
  function calcTablePosition(
    arr: ITableData[],
    index: number,
    points: number,
    goalsScored: number,
    goalsDiff: number
  ): string {
    const prevRow = arr[index - 1];

    if (prevRow)
      if (prevRow.points === points)
        if (prevRow.goalsDiff === goalsDiff)
          if (prevRow.goalsScored === goalsScored) return index.toString();
    return (index + 1).toString();
  }

  // render table
  return calculatedTableData
    .map((row, i, arr) => {
      const {
        team,
        numMatches,
        won,
        tie,
        lost,
        goalsScored,
        goalsReceived,
        goalsDiff,
        points,
      } = row;

      const position = calcTablePosition(
        arr,
        i,
        points,
        goalsScored,
        goalsDiff
      );

      console.log(
        `${position.padStart(2, " ")}. ${team.padEnd(
          30,
          " "
        )}${numMatches}  ${won}  ${tie}  ${lost}  ${goalsScored}:${goalsReceived}  ${points}`
        // })
        // .join("\n")
      );

      return `${position.padStart(2, " ")}. ${team.padEnd(
        30,
        " "
      )}${numMatches}  ${won}  ${tie}  ${lost}  ${goalsScored}:${goalsReceived}  ${points}`;
    })
    .join("\n");
}

// table([
//   "6:0 FC Bayern Muenchen - Werder Bremen",
//   "-:- Eintracht Frankfurt - Schalke 04",
//   "-:- FC Augsburg - VfL Wolfsburg",
//   "-:- Hamburger SV - FC Ingolstadt",
//   "1:1 1. FC Koeln - SV Darmstadt",
//   "-:- Borussia Dortmund - FSV Mainz 05",
//   "2:3 Borussia Moenchengladbach - Bayer Leverkusen",
//   "-:- Hertha BSC Berlin - SC Freiburg",
//   "-:- TSG 1899 Hoffenheim - RasenBall Leipzig",
// ]);

/**
 *
 * @param {string} result e.g. '6:0 FC Bayern Muenchen - Werder Bremen'
 /////* @returns {object} e.g. { 'FC Bayern Muenchen': 6, 'Werder Bremen': 0 }
 */
function convertStrResultToObj(result: string) {
  // if (result[0] === "-") return null; // match not played
  //   interface IResultObj {
  //     homeTeam?: number;
  //     awayTeam?: number;
  //   }

  // const resultObj: IResultObj = {};
  const [score, ...rest] = result.split(" ");
  const [homeTeam, awayTeam] = rest.join(" ").split(" - ");
  const scores = score.split(":").map(Number);

  // resultObj[homeTeam] = scores[0];
  // resultObj[awayTeam] = scores[1];

  //   return [homeTeam, scores[0], awayTeam, scores[1]];
  return { [homeTeam]: scores[0], [awayTeam]: scores[1] };

  // return resultObj;
}
