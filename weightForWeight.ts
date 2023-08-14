export function orderWeight(str: string): string {
  // remove unnecessary whitespaces
  // turn input string into array (of strings)
  // loop through array
  // convert every element into array of digits/numbers and add the digits
  // flaten the arrays into one
  // sort the array
  // turn array (space seperated) into string

  // create map object with elements as keys and the sum of the digits as values
  // loop through elements

  if (!str) return "";

  let numMap: { [key: string]: any } = {};

  const arr: string[] = str.trim().split(" ");
  // console.log(arr)

  for (let element of arr) {
    numMap[element] = element
      .split("")
      .map(Number)
      .reduce((acc, curr) => acc + curr);
  }
  // for (let element of arr) {
  // numMapA[element]+'a' = element.split('').reduce((acc,curr)=> Number(acc)+Number(curr))
  // }
  //   console.log(numMap);
  //   let sortable = [];
  // for (var vehicle in numMap) {
  // sortable.push([vehicle, numMap[vehicle]]);
  // }
  let icke: [string, number][] = [];
  for (let element of arr) {
    icke.push([element, numMap[element]]);
  }
  // console.log('icke:', icke.sort((a,b)=>Number(a[1])-Number(b[1])))
  icke.sort((a, b) => {
    // const sortBySecondElement = a[1]-b[1]
    // return sortBySecondElement !== 0 ? sortBySecondElement : (b[0] - a[0]);
    // Wenn das zweite Element gleich ist, vergleiche das erste Element (Index 0) in umgekehrter Reihenfolge
    const sortBySecondElement = a[1] - b[1];
    // if the second element is equal, sort by index 0
    return sortBySecondElement === 0
      ? a[0].localeCompare(b[0])
      : sortBySecondElement;
  });
  //   console.log("icke:", icke); //.sort((a,b)=>a[1]-b[1]))
  //   console.log(sortable);

  // sortable.sort((a, b) => a[1] - b[1]);
  // console.log(sortable)

  return icke.map((element) => element[0]).join(" ");
  // console.log(blub)

  // const test = arr.map(numStr=> numStr.split('').reduce((acc,curr)=> Number(acc)+Number(curr))).sort()
  // console.log(test)
}

// orderWeight("103 123 4444 99 2000")//, "2000 103 123 4444 99");
orderWeight("2000 10003 1234000 44444444 9999 11 11 22 123"); //, "11 11 2000 10003 22 123 1234000 44444444 9999");
