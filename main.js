function calculateVolume(array, left, right) {
    const width = right - left - 1
    const height = Math.min(array[left], array[right])
    //make sure width exists
    //calculate the "bumps to subtract from the volume
    const bumps = width ? array.slice(left+1, right).reduce((a,b) => {
      return a+b;
    }) : 0
    return (width * height) - bumps
}

// Best: O(n) ie [3,0,0,0,0,0,3]
// Worst/ average: O(n^2)
function measureWater(arr) {
  let sum = 0;
  let left = 0;
  let highestIndex = 1;
  while (left < arr.length - 1) {
    for (let i = left + 1; i < arr.length; i++) {
      if (arr[i] > arr[highestIndex]) {
        highestIndex = i
      }
      if (arr[i] >= arr[left]) {
        highestIndex = i
        //if the right wall is higher or the same height of the left, then we are finished with this section of the array
        //therefore we can stop the for loop here, and begin a new one with a new left wall
        break;
      }
    }
    //store our sum and make make the left wall the highIndex
    sum += calculateVolume(arr, left, highestIndex)
    left = highestIndex
    highestIndex = left + 1
  }
  return sum;
}
