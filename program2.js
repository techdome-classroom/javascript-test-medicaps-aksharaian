

function smallestMissingPositiveInteger(nums) {
  const set = new Set(nums.filter(num => num > 0));
  for (let i = 1; i <= set.size + 1; i++) {
      if (!set.has(i)) return i;
  }
}


module.exports = smallestMissingPositiveInteger;
