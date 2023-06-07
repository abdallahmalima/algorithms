var arr = [4, 5, 1, 7, 2];
var k = 3;
var twoSum = function (arr, k) {
    var set = new Set();
    for (var i = 0; i < arr.length; i++) {
        var diff = k - arr[i];
        if (set.has(diff)) {
            return true;
        }
        else {
            set.add(arr[i]);
        }
    }
    return false;
};
console.log(twoSum(arr, k));
//O(n)
