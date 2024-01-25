export const toQueryString = (obj: { [key: string]: any }): string => {
  // loop through keys of the input object
  // if a value of a key is an array
  /// loop through the array,
  /// add the key-value-pair for each element to an output array
  // else add the key-value-pair to the array

  const queryArr: string[] = [];

  for (let key in obj) {
    const value = obj[key];

    if (Array.isArray(value)) {
      for (let i = 0; i < value.length; i++) {
        queryArr.push(`${key}=${value[i]}`);
      }
      continue;
    }

    queryArr.push(`${key}=${value}`);
  }

  return queryArr.join("&");
};
