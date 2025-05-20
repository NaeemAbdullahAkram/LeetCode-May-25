class Solution:
    def isZeroArray(self, nums: List[int], queries: List[List[int]]) -> bool:
        arr=[0 for i in range(len(nums)+1)]
        for s,e in queries: 
            arr[s]+=1
            arr[e+1]-=1
        curr=0
        for i in range(len(nums)):
            curr+=arr[i]
            nums[i]-=curr
            if nums[i]>0: return False
        return True