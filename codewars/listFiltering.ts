export function filter_list(list: any[]): number[] {
  return list.filter((element) => typeof element === "number");
}
