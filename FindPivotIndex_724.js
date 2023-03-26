function pivotIndex(nums) {
    // base case
    if (nums.length === 1) {
        return 0;
    }
    var leftSum = 0;
    var rightSum = 0;
    for (var i = 1; i < nums.length; i++) {
        rightSum += nums[i];
    }
    nums.forEach(function (v, index) {
        if (leftSum === rightSum) {
            return index;
        }
        var leftValue = nums[index];
        var rightValue = nums[index + 2] || 0;
        leftSum += leftValue;
        rightSum -= rightValue;
    });
    return -1;
}
;