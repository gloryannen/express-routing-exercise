/** Get avg of nums in an array */
function getMean(nums) {
    if (nums.length === 0) return 0;

    let total = 0;
    for (let i = 0; i < nums.length; i++) {
      total += nums[i];
    }
    return total / nums.length;
};

/** Get middle num in assorted array of nums */
function getMedian(nums) {
    const { length } = nums;
    nums.sort((a, b) => a - b);
    if (length % 2 === 0) {
        return (nums[length / 2 - 1] + nums[length / 2]) / 2;
    }
    return nums[(length - 1) / 2];
};

/** Get num that appears that most */
function getMode(nums) {
    let mode = {};
    let max = 0;
    let count = 0;

  for(let i = 0; i < nums.length; i++) {
    if (mode[nums[i]]) {
        mode[nums[i]] += 1
      } else {
        mode[nums[i]] = 1
      }
    }
  
    Object.keys(mode).forEach(key => {
      let value = mode[key]
      if (value > count) {
        count = value
        max = key
      }
    })
    return parseInt(max)
};

module.exports={
  getMean,
  getMedian,
  getMode

}