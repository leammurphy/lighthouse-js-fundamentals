

function lastIndexOf(arr, v) {
  let ans = -1;
  for (let i = arr.length; i >= 0; i--) {
    if (arr[i] === v) {
      ans = i;
      return i
    }
  }
  return ans
}

console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1), "=?", 3);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2), "=?", 4);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3), "=?", -1);
console.log(lastIndexOf([ 5, 5, 5 ], 5), "=?", 2);
console.log(lastIndexOf([], 3), "=?", -1);