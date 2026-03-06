/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    const n = nums.length - 1
    let res = []
    let left = 0
    let right = n

    for(let i = n; i > -1; i--) {
        if(nums[left] * nums[left] >= nums[right] * nums[right]) {
            res[i] = nums[left] * nums[left]
            left++
        } else {
            res[i] = nums[right] * nums[right]
            right--
        }
    }

    return res
};