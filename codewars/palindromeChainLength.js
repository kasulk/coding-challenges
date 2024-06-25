function palindromeChainLength(num) {
  let nextNum = num;

  for (let step = 0; ; step++) {
    const revNum = Number(nextNum.toString().split("").reverse().join(""));

    if (nextNum === revNum) return step;
    nextNum += revNum;
  }
}
