function calculateVolume(array, left, right) {
    const width = right - left - 1
    const height = Math.min(array[left], array[right])
    console.log(width, height)
    const bumps = width ? array.slice(left+1, right).reduce((a,b) => {
      return a+b;
    }) : 0
    return (width * height) - bumps
}
  
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
        break;
      }
    }
    sum += calculateVolume(arr, left, highestIndex)
    left = highestIndex
    highestIndex = left + 1
  }
  return sum
}
