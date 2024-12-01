function solution(obj) {
  return Object.entries(obj)
    .map(([key, value]) => `${key} = ${value}`)
    .join(",");
}
