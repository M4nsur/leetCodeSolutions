/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let result = []
    const n = nums.length - 1 
    let left = 0
    let right = n
    for(let i = n; i > -1; i--) {
        if(nums[left] * nums[left] < nums[right] * nums[right]) {
            result[i] =  nums[right] * nums[right]
            right--
        } else if (nums[left] * nums[left] >= nums[right] * nums[right]) {
            result[i] = nums[left] * nums[left]
            left++
        }
    }
    return result
};