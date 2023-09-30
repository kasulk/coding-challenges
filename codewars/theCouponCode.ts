export function checkCoupon(
  enteredCode: string,
  correctCode: string,
  currentDate: string,
  expirationDate: string
): boolean {
  // if enteredCode doesn't equal the correct code, return false
  // create a function that converts dates into the number format yyyymmdd
  // remove the commas from the dates,
  // and convert them into arrays, with month, day and year as elements
  // concatenate the date values in the right order
  // turn the month into the index from the months array and increase it by 1
  // if < 10, add a 0 before it
  // if the day < 10, add a 0 before it
  // if the number of the currentDate > expirationDate, return false, else true

  if (enteredCode !== correctCode) return false;

  return (
    convertDatesToNumbers(currentDate) <= convertDatesToNumbers(expirationDate)
  );
}

function convertDatesToNumbers(date: string): number {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const dateValues: string[] = date.replace(",", "").split(" ");

  const year = dateValues[2];
  let month = String(months.indexOf(dateValues[0]) + 1);
  let day = dateValues[1];

  if (month.length === 1) month = "0" + month;
  if (day.length === 1) day = "0" + day;

  return Number(year + month + day);
}
