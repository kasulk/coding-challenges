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
  const resultObjects = results.map((result) => {
    return convertSingleStrResultToObj(result);
  });

  let calculatedTableData: ITableData[] = [];

  resultObjects.forEach((result) => {
    const [homeTeam, awayTeam] = Object.keys(result).map((team, i) => {
      const teamData = new (TeamData as any)(team); // TS for 'new TeamData(team)'
      const opponentIndex = i === 0 ? 1 : 0;
      const opponent = Object.keys(result)[opponentIndex];

      if (!isNaN(result[team])) {
        // calcAndAddGeneralTeamData()
        teamData.numMatches++;
        teamData.goalsScored += result[team];
        teamData.goalsReceived += result[opponent];
        teamData.goalsDiff = teamData.goalsScored - teamData.goalsReceived;
      }
      return teamData; // [{team: 'FCB', ...},{}]
    });

    if (homeTeam.numMatches) {
      calcAndAddWonTieLostAndPoints(homeTeam, awayTeam);
    }

    calculatedTableData = [...calculatedTableData, homeTeam, awayTeam];
  });

  sortTableData(calculatedTableData);

  return renderTable(calculatedTableData);
}

//
function TeamData(this: ITableData, team: string) {
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

/**
 * Converts element of input array into object
 * with team names as keys and scores as values
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

//
function calcAndAddWonTieLostAndPoints(homeTeam: any, awayTeam: any): void {
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

//
function sortTableData(calculatedTableData: ITableData[]) {
  calculatedTableData.sort((a, b) => {
    if (a.points !== b.points) return b.points - a.points;
    else if (a.goalsDiff !== b.goalsDiff) return b.goalsDiff - a.goalsDiff;
    else if (a.goalsScored !== b.goalsScored)
      return b.goalsScored - a.goalsScored;
    else return a.team.localeCompare(b.team);
  });
}

let rankNum = 1;
//
function calcRankNum(
  arr: ITableData[],
  i: number,
  points: number,
  goalsScored: number,
  goalsDiff: number
  // rankNum: number
): string {
  const prevRow = arr[i - 1];

  if (prevRow) {
    if (prevRow.points === points) {
      if (prevRow.goalsDiff === goalsDiff) {
        if (prevRow.goalsScored === goalsScored) {
          return rankNum.toString();
        }
      }
    }
  }
  rankNum = i + 1;

  return rankNum.toString();
}

//
function renderTable(calculatedTableData: ITableData[]) {
  //
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

      const rank = calcRankNum(
        arr,
        i,
        points,
        goalsScored,
        goalsDiff
        // rankNum
      );

      return `${rank.padStart(2, " ")}. ${team.padEnd(
        30,
        " "
      )}${numMatches}  ${won}  ${tie}  ${lost}  ${goalsScored}:${goalsReceived}  ${points}`;
    })
    .join("\n");
}
