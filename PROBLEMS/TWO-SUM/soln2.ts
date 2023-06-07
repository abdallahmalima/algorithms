const arr: number[] = [4, 5, 1, 7, 2];
const k: number = 3;

const twoSum = (arr: number[], k: number): boolean => {
  arr.sort((a, b) => a - b); // O(nlogn)
  let lastIndex: number = arr.length - 1;
  let firstIndex: number = 0;
  //O(n)
  while (firstIndex < lastIndex) {
    const sum: number = arr[firstIndex] + arr[lastIndex];
    if (sum === k) {
      return true;
    } else if (sum > k) {
      lastIndex--;
    } else {
      firstIndex++;
    }
  }
  return false;
};

console.log(twoSum(arr, k));

//O(nlogn)+n=O(nlogn)