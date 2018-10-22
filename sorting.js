function bubbleSort(data) {
  let len = data.length;

  do {
    for (let i = 0; i < len - 1; i++) {
      if (data[i] > data[i + 1]) {
        swap(data, i, i + 1);
      }
    }
  } while (len--);
  return data;
}
function swap(arr, indexA, indexB) {
  let temp = arr[indexA];
  arr[indexA] = arr[indexB];
  arr[indexB] = temp;
}

console.log(bubbleSort([1, 2, 5, 6, 7, 31, 53, 22, 66, 88, 99]));

//MergeSort Breaks data in 1/2 and compares
function mergeSort(data) {
  if (data.length < 2) {
    return data;
  }

  let midPoint = Math.round(data.length / 2);
  return merge(
    mergeSort(data.slice(0, midPoint)),
    mergeSort(data.slice(midPoint))
  );
  function merge(left, right) {
    let output = [];
    while (left.length && right.length) {
      output.push(left[0] < right[0] ? left.shift() : right.shift());
    }
    while (left.length) {
      output.push(left.shift());
    }
    while (right.length) {
      output.push(right.shift());
    }
    return output;
  }
}

//quicksort has a pivot checks the right marker list to the left has smaller and to the right it had greater

function quickSort(data) {
  if (data.length < 1) {
    return [];
  }
  let left = [];
  let right = [];
  let pivot = data[0];

  for (let i = 1; data.length; i++) {
    if (data[i] < pivot) {
      left.push(data[i]);
    } else {
      right.push(data[i]);
    }
  }
  return [].concat(quickSort(left), pivot, quickSort(right));
}
//
