//merge sort
export function getMergeSortAnimations(array) {
  const animations = [];
  if (array.length <= 1) return array;
  const auxiliaryArray = array.slice();
  mergeSortHelper(array, 0, array.length - 1, auxiliaryArray, animations);
  return animations;
}

function mergeSortHelper(
  mainArray,
  startIdx,
  endIdx,
  auxiliaryArray,
  animations,
) {
  if (startIdx === endIdx) return;
  const middleIdx = Math.floor((startIdx + endIdx) / 2);
  mergeSortHelper(auxiliaryArray, startIdx, middleIdx, mainArray, animations);
  mergeSortHelper(auxiliaryArray, middleIdx + 1, endIdx, mainArray, animations);
  doMerge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, animations);
}

function doMerge(
  mainArray,
  startIdx,
  middleIdx,
  endIdx,
  auxiliaryArray,
  animations,
) {
  let k = startIdx;
  let i = startIdx;
  let j = middleIdx + 1;
  while (i <= middleIdx && j <= endIdx) {
    animations.push([i, j]);
    animations.push([i, j]);
    if (auxiliaryArray[i] <= auxiliaryArray[j]) {
      animations.push([k, auxiliaryArray[i]]);
      mainArray[k++] = auxiliaryArray[i++];
    } else {
      animations.push([k, auxiliaryArray[j]]);
      mainArray[k++] = auxiliaryArray[j++];
    }
  }
  while (i <= middleIdx) {
    animations.push([i, i]);
    animations.push([i, i]);
    animations.push([k, auxiliaryArray[i]]);
    mainArray[k++] = auxiliaryArray[i++];
  }
  while (j <= endIdx) {
    animations.push([j, j]);
    animations.push([j, j]);
    animations.push([k, auxiliaryArray[j]]);
    mainArray[k++] = auxiliaryArray[j++];
  }
}

//Quick sort
export function getQuickSortAnimations(array) {
  const animations = [];
  if (array.length <= 1) return array;
  quickSort(array, 0, array.length - 1, animations);
  return animations;
}
function swap(items, leftIndex, rightIndex) {
  var temp = items[leftIndex];
  items[leftIndex] = items[rightIndex];
  items[rightIndex] = temp;
}
function partition(items, left, right, animations) {
  var pivot = items[Math.floor((right + left) / 2)], //middle element
    i = left, //left pointer
    j = right; //right pointer
  let mid = Math.floor((right + left) / 2);
  while (i <= j) {
    while (items[i] < pivot) {
      animations.push([0, i, mid]);
      animations.push([0, i, mid]);
      i++;
    }
    while (items[j] > pivot) {
      animations.push([0, j, mid]);
      animations.push([0, j, mid]);
      j--;
    }
    if (i <= j) {
      animations.push([1, i, items[i]]);
      animations.push([1, j, items[j]]);
      swap(items, i, j); //sawpping two elements
      i++;
      j--;
    }
  }
  return i;
}

function quickSort(items, left, right, animations) {
  var index;
  if (items.length > 1) {
    index = partition(items, left, right, animations); //index returned from partition
    if (left < index - 1) { //more elements on the left side of the pivot
      quickSort(items, left, index - 1, animations);
    }
    if (index < right) { //more elements on the right side of the pivot
      quickSort(items, index, right, animations);
    }
  }
  return items;
}

//bubble sort
export function getBubbleSortAnimations(array) {
  const animations = [];
  if (array.length <= 1) return array;
  bubbleSort(array, animations);
  return animations;
}
function bubbleSort(array, animations) {

  var len = array.length;

  var isSwapped = false;

  for (let i = len; i > 0; i--) {

    isSwapped = false;

    for (let j = 0; j < i - 1; j++) {
      animations.push([0, j, j + 1]);
      animations.push([0, j, j + 1]);
      if (array[j] > array[j + 1]) {
        animations.push([1, j, array[j]]);
        animations.push([1, j + 1, array[j + 1]]);
        var temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
        isSwapped = true;
      }
    }

    // Break if the array is already sorted

    if (!isSwapped) {
      break;
    }
  }
}

//insertion sort
export function getInsertionSortAnimations(array) {
  const animations = [];
  if (array.length <= 1) return array;
  insertionSort(array, animations);
  return animations;
}
function insertionSort(inputArr, animations) {
  let n = inputArr.length;
  for (let i = 1; i < n; i++) {
    // Choosing the first element in our unsorted subarray
    let current = inputArr[i];
    // The last element of our sorted subarray
    let j = i - 1;
    while ((j > -1) && (current < inputArr[j])) {
      animations.push([0, i, j]);
      animations.push([0, i, j]);
      animations.push([1, j + 1, inputArr[j]]);
      inputArr[j + 1] = inputArr[j];
      j--;
    }
    animations.push([1, j + 1, current]);
    inputArr[j + 1] = current;
  }
  return inputArr;
}

