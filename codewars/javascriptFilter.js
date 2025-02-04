function searchNames(logins) {
  return logins.filter(([name, email]) => name.endsWith("_"));
}
let a = [
  ["foo", "foo@foo.com"],
  ["bar_", "bar@bar.com"],
];
searchNames(a);
