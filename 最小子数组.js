// https://leetcode.cn/problems/2VG8Kg/solutions/

// 滑动窗口的精妙之处在于根据当前子序列和大小的情况，不断调节子序列的起始位置。从而将O(n^2)暴力解法降为O(n)。
function minSubArrayLen(target, nums) {
    let left = 0;
    let right = 1;
    let sum = nums[left];
    let length = 0;

    while (right < nums.length) {
        if (length === 1) {
            return length
        }
        if (sum >= target) {
            length = length === 0 ? right - left : Math.min(length, right - left);
            sum -= nums[left];
            left++;
        } else {
            sum += nums[right];
            right++;
        }
    }

    while (left <= right) {
        if (sum >= target) {
            length = length === 0 ? right - left : Math.min(length, right - left);
            sum -= nums[left];
            left++
        } else {
            return length
        }
    }

    return length
};

console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3]))
console.log(minSubArrayLen(4, [1, 4, 4]))
console.log(minSubArrayLen(11, [1, 1, 1, 1, 1, 1, 1, 1]))
