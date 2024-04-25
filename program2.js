
function smallestMissingPositiveInteger(nums) {
  if (nums.length === 0) {
      return 1;
  }
  
  nums = Array.from(new Set(nums.filter(x => x > 0)));
  
  let smallestPositive = 1;
  while (nums.includes(smallestPositive)) {
      smallestPositive++;
  }
  
  return smallestPositive;
}
module.exports = smallestMissingPositiveInteger;
