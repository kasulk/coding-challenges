export const mirror = (obj: Record<string, any>): Record<string, string> => {
  const keysArr = Object.keys(obj);
  const keyValueArrs = keysArr.map((key) => {
    const value = key.split("").reverse().join("");
    return [key, value];
  });

  return Object.fromEntries(keyValueArrs);
};
