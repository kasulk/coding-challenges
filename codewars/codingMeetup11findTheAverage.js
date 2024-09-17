function getAverageAge(devs) {
  const averageAge = devs.reduce((sum, dev) => sum + dev.age, 0) / devs.length;
  return Math.round(averageAge);
}
