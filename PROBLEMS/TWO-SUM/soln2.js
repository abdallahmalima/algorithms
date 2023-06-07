var arr = [4, 5, 1, 7, 2];
var k = 3;
var twoSum = function (arr, k) {
    arr.sort(function (a, b) { return a - b; });
    var lastIndex = arr.length - 1;
    var firstIndex = 0;
    while (firstIndex < lastIndex) {
        var sum = arr[firstIndex] + arr[lastIndex];
        if (sum === k) {
            return true;
        }
        else if (sum > k) {
            lastIndex--;
        }
        else {
            firstIndex++;
        }
    }
    return false;
};
console.log(twoSum(arr, k));
