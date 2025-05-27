class Solution:
    def moveZeroes(self, nums: List[int]) -> None:
        insert_pos = 0

        for num in nums:
            if num != 0:
                nums[insert_pos] = num
                insert_pos += 1

        for i in range(insert_pos, len(nums)):
            nums[i] = 0