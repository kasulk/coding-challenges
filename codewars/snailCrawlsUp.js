function snail(colHeight, dayCrawlUp, nightSlideDown) {
  for (let numDays = 1, snailPos = 0; ; numDays++) {
    snailPos += dayCrawlUp;
    if (snailPos >= colHeight) return numDays;
    snailPos -= nightSlideDown;
  }
}
