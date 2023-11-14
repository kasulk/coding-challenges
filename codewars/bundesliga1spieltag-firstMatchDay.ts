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

export function table(results: string[]): string {
  //
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
    return convertSingleStrResultToObj(result);
  });

  // const table = [];
  let calculatedTableData: ITableData[] = [];
  // result --> { 'FC Bayern Muenchen': 6, 'Werder Bremen': 0 }
  pimpedResults.forEach((result) => {
    const [homeTeam, awayTeam] = Object.keys(result).map((team, i) => {
      const blub = new (TeamTableData as any)(team); // TS for 'new TeamTableData(team)'
      const opponentIndex = i === 0 ? 1 : 0;
      const opponent = Object.keys(result)[opponentIndex];

      if (!isNaN(result[team])) {
        blub.numMatches++;
        blub.goalsScored += result[team];
        blub.goalsReceived += result[opponent];
        blub.goalsDiff = blub.goalsScored - blub.goalsReceived;
      }
      return blub; // [{team: 'FCB', ...},{}]
    });

    if (homeTeam.numMatches) {
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
  });

  // sort table data
  calculatedTableData.sort((a, b) => {
    if (a.points !== b.points) return b.points - a.points;
    else if (a.goalsDiff !== b.goalsDiff) return b.goalsDiff - a.goalsDiff;
    else if (a.goalsScored !== b.goalsScored)
      return b.goalsScored - a.goalsScored;
    else return a.team.localeCompare(b.team);
  });

  let pos = 1;

  // calculate position number
  function calcTablePosition(
    arr: ITableData[],
    i: number,
    points: number,
    goalsScored: number,
    goalsDiff: number
  ): string {
    const prevRow = arr[i - 1];

    if (prevRow) {
      if (prevRow.points === points) {
        if (prevRow.goalsDiff === goalsDiff) {
          if (prevRow.goalsScored === goalsScored) {
            return pos.toString();
          }
        }
      }
    }
    pos = i + 1;

    return pos.toString();
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

      // console.log(
      //   `${position.padStart(2, " ")}. ${team.padEnd(
      //     30,
      //     " "
      //   )}${numMatches}  ${won}  ${tie}  ${lost}  ${goalsScored}:${goalsReceived}  ${points}`
      // );

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
 * @returns {Object} e.g. { 'FC Bayern Muenchen': 6, 'Werder Bremen': 0 }
 */
function convertSingleStrResultToObj(result: string): {
  [key: string]: number;
} {
  const [score, ...rest] = result.split(" ");
  const [homeTeam, awayTeam] = rest.join(" ").split(" - ");
  const scores = score.split(":").map(Number);

  return { [homeTeam]: scores[0], [awayTeam]: scores[1] };
}
