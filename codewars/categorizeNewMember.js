function openOrSenior(data) {
  return data.map((aspirant) => {
    const [age, handicap] = aspirant;

    return age >= 55 && handicap > 7 ? "Senior" : "Open";
  });
}
