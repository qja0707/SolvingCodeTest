function pivotIndex(nums: number[]): number {
    // base case
    if (nums.length === 1) {
        return 0
    }

    let leftSum = 0
    let rightSum = 0

    for (let i = 1; i < nums.length; i++) {
        rightSum += nums[i]
    }

    for (let index = 0; index < nums.length; index++) {
        if (leftSum === rightSum) {
            return index
        }

        const leftValue = nums[index]
        const rightValue = nums[index + 1] || 0

        leftSum += leftValue
        rightSum -= rightValue
    }

    return -1
};

console.log(pivotIndex([1, 7, 3, 6, 5, 6]))