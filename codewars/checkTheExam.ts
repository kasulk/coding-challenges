export function checkExam(
  solutions: string[],
  studentsAnswers: string[]
): number {
  // create a scoreSum counter variable
  // loop through arrays,
  // for each element of each array
  // if the element in studentsAnswers is empty, continue
  // if the elements are the same, increase scoreSum by 4
  // else decrease the scoreSum by -1
  // return 0 if the scoreSum is < 0, else return the scoreSum

  let scoreSum = 0;

  for (let i = 0; i < solutions.length; i++) {
    if (!studentsAnswers[i]) continue;
    if (studentsAnswers[i] === solutions[i]) {
      scoreSum += 4;
      continue;
    }

    scoreSum -= 1;
  }
  return scoreSum < 0 ? 0 : scoreSum;
}
