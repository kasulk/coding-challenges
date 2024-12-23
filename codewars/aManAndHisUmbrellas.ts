export function minUmbrellas(weather: string[]): number {
  const numUmbrellas: { home: number; work: number } = {
    home: 0,
    work: 0,
  };

  weather.forEach((halfDay, i) => {
    const isWet = halfDay === "rainy" || halfDay === "thunderstorms";
    const isMorning = i % 2 === 0;
    const isAfternoon = i % 2 !== 0;

    if (isWet) {
      if (isMorning) {
        if (numUmbrellas.home > 0) numUmbrellas.home--;
        numUmbrellas.work++;
      }
      if (isAfternoon) {
        if (numUmbrellas.work > 0) numUmbrellas.work--;
        numUmbrellas.home++;
      }
    }
  });

  return numUmbrellas.home + numUmbrellas.work;
}
