function fizzBuzzCuckooClock(time) {
  const [hrs24, mins] = time.split(":").map(Number);
  const hrs12 = hrs24 % 12 || 12;

  if (!mins) return Array(hrs12).fill("Cuckoo").join(" ");
  if (mins === 30) return "Cuckoo";

  if (mins % 15 === 0) return "Fizz Buzz";
  if (mins % 3 === 0) return "Fizz";
  if (mins % 5 === 0) return "Buzz";

  return "tick";
}
