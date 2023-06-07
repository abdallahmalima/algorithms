var arr = [4, 5, 1, 7, 2];
var k = 13;
var twoSum = function (arr, k) {
    for (var i = 0; i < arr.length - 1; i++) {
        for (var j = i + 1; j < arr.length; j++) {
            var sum = arr[i] + arr[j];
            if (sum == k)
                return true;
        }
    }
    return false;
};
console.log(twoSum(arr, k));
