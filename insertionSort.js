// 升序
const insertionSert = (nums) => {
    for (let i = 1; i < nums.length; i++) {
        let v = nums[i];   // 待排序元素
        let point = i - 1;
        while(point > 0 && nums[point] > v) {
            nums[point + 1] = nums[point]
            point--
        }
        nums[point+1] = v   // 排好序的部分，进来的元素只交换一次
    }
}

