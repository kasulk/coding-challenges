function solve(str) {
  const result = [0, 0, 0, 0];

  str.split("").forEach((char) => {
    if (/[A-Z]/.test(char)) result[0]++;
    else if (/[a-z]/.test(char)) result[1]++;
    else if (/[0-9]/.test(char)) result[2]++;
    else result[3]++;
  });

  return result;
}
