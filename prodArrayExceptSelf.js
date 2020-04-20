
//238. Product of Array Except Self

//Given an array nums of n integers where n > 1,  return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].

//Input:  [1,2,3,4]
//Output: [24,12,8,6]

//Note: Please solve it without division and in O(n).

// [4,5,1,8,2]
// [ 80, 64, 320, 40, 160 ]

// var productExceptSelf = function(nums) {
//   let ans = [1]
//   let right = 1

//   for (let i = 1; i < nums.length; i++) {
//     ans[i] = nums[i - 1] * ans[i - 1]
//   }

//   for (let i = nums.length - 2; i > -1; i--) {
//     right *= nums[i + 1]
//     ans[i] = ans[i] * right
//   }

//   return ans
// }

var productExceptSelf = function(nums) {
  let prod = nums.reduce((a,b) => (a * b))
  let ans = []

  for (let i = 0; i < nums.length; i++) {
    let div = nums[i] ** -1
    ans.push(prod * div)
  }

  return ans
}


productExceptSelf([4,5,1,8,2])