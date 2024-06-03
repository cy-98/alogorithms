// // 暴力
// function removeElement(nums, val) {
//     let length = nums.length
//     for (let i = 0; i < length; i++) {
//         if (nums[i] === val) {
//             for (let j = i + 1; j < nums.length; j++) {
//                 nums[j - 1] = nums[j]
//             }
//             i--
//             length--
//         }
//     }
//     return length
// };


// 快慢指针
// 如果要移除的元素恰好在数组的开头，例如序列 [1,2,3,4,5][1,2,3,4,5][1,2,3,4,5]，我们需要把每一个元素都左移一位
function removeElement(nums, val) {
    let slow = 0
    for (let fast = 0; fast < nums.length; fast++) {
        if (nums[fast] !== val) {
            nums[slow] = nums[fast]
            slow++
        }
    }
    return slow
};


// 首尾指针
// 最坏情况下只遍历了一次
function removeElement(nums, val) {
    let left = 0;
    let right = nums.length ;
    while (left < right) {
        if (nums[left] === val) {
            nums[left] = nums[right-1];
            right--
        } else {
            left++
        }
    }
    return left;
}

const nums = [3, 2, 2, 3]

console.log(removeElement(nums, 3), nums)