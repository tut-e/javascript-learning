const data = ["а", "б", "в", "г", "д"];

function getLastElements(arr, count) {
  if (count <= 0) return [];
  return arr.slice(-count);
}

console.log(getLastElements(data, 3)); // ['в', 'г', 'д']
console.log(getLastElements(data, 0)); // []
