//Binary Search needs to be sort 1st

let array = [1, 3, 2, 155, 12, 6, 4, 66, 865, 35, 12, 14, 13, 15, 16, 21];

let sorted = array.sort((a, b) => a - b);

console.log(sorted);

function binarySeach(arr, value) {
  let high = arr.length - 1;
  let low = 0;
  let mid = 0;

  while (low <= high) {
    mid = Math.floor(high + low / 2);
    if (arr[mid] == value) {
      return arr[mid];
    } else if (value > arr[mid]) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return -1;
}

let searchMe = binarySeach(sorted, 14);

console.log(searchMe);

function binarySearch2(array, value, start, end) {
  var start = start === undefined ? 0 : start;
  var end = end === undefined ? array.length : end;

  if (start > end) {
    return -1;
  }

  const index = Math.floor((start + end) / 2);
  const item = array[index];

  console.log(start, end);
  if (item == value) {
    return index;
  } else if (item < value) {
    return binarySearch(array, value, index + 1, end);
  } else if (item > value) {
    return binarySearch(array, value, start, index - 1);
  }
}
