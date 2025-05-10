class Solution:
    def minSum(self, nums1: List[int], nums2: List[int]) -> int:
        n1 = nums1.count(0)
        n2 = nums2.count(0)
        s1 = sum(nums1)
        s2 = sum(nums2)

        if (n1 == 0 and s1 < s2 + n2) or (n2 == 0 and s2 < s1 + n1):
            return -1

        return max(s1 + n1, s2 + n2)