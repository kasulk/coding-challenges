var nbrOfLaps = function (x, y) {
  // loop
  // nehme die 5 * 1 und die 3 * 1, kucke obs passt
  // wenn eines von beiden groesser ist, erhoehe das andere um 1
  // wenn x*a = y*b, beende den loop
  // (spaetestens wenn x = y)
  let roundsBob = 1;
  let roundsCharles = 1;

  while (roundsBob * x !== roundsCharles * y) {
    roundsBob * x < roundsCharles * y ? roundsBob++ : roundsCharles++;
  }

  return [roundsBob, roundsCharles];
};
