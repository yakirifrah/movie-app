export const isEmpty = (inputObject) => {
  return Object.keys(inputObject).length === 0;
};

export const removeItemByIndex = (arr, idx) => {
  return arr.slice(0, idx).concat(arr.slice(idx + 1, arr.length));
};
