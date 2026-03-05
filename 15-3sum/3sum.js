/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let result = new Set()
    let n = nums.length
    nums.sort((a, b) => a - b)
    for(let i = 0; i < n; i++) {
        let target = -nums[i]
        let left = i + 1
        let right = n - 1
        if(i > 0 && nums[i] === nums[i-1]) continue
        while(left < right) {
            let currentSum = nums[left] + nums[right]
            if(target === currentSum) {
                result.add(JSON.stringify([nums[i], nums[left], nums[right]]))
                left++
                right--
            } else if (target < currentSum) {
                right--
            } else {
                left++
            }
        }  
    } 
        return Array.from(result).map(x => JSON.parse(x))
}