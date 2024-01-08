export function weatherInfo(temp: number): string {
  const celsiusTemp = Math.round(convertToCelsius(temp) * 1e5) / 1e5;

  if (celsiusTemp < 0) return celsiusTemp + " is freezing temperature";
  return celsiusTemp + " is above freezing temperature";
}

export function convertToCelsius(temperature: number): number {
  return Math.round((((temperature - 32) * 5) / 9) * 1e5) / 1e5;
}
