export function getPositions(step: number): number[] {
  let person1 = 0;
  let person2 = 0;
  let person3 = 0;

  // pattern repeats itself at step 54
  for (let i = 1; i <= step % 54; i++) {
    person1 = (person1 + 1) % 3;

    if (person1 === 0) {
      person2 = (person2 + 1) % 3;

      if (person2 === 0) {
        person3 = (person3 + 1) % 3;
      }
    }
  }

  return [person1, person2, person3];
}
