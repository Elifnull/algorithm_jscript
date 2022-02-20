//pivot point necessary, positino and partition

function quickSort(arr, leftPos, rightPos, arrLength) {
    let initialLeftPos = leftPos;
    let initialRightPos = rightPos;
    let direction = true;
    let pivot = rightPos;
    while ((leftPos - rightPos) < 0) {
        if (direction) {
        if (arr[pivot] < arr[leftPos]) {
            quickSort.swap(arr, pivot, leftPos);
            pivot = leftPos;
            rightPos--;
            direction = !direction;
        } else
            leftPos++;
        } else {
        if (arr[pivot] <= arr[rightPos]) {
            rightPos--;
        } else {
            quickSort.swap(arr, pivot, rightPos);
            leftPos++;
            pivot = rightPos;
            direction = !direction;
        }
        }
    }
    if (pivot - 1 > initialLeftPos) {
        quickSort(arr, initialLeftPos, pivot - 1, arrLength);
    }
    if (pivot + 1 < initialRightPos) {
        quickSort(arr, pivot + 1, initialRightPos, arrLength);
    }
}