function solution(str, searchStr) {
  const regex = new RegExp(searchStr, "g");
  return (str.match(regex) || []).length;
}
