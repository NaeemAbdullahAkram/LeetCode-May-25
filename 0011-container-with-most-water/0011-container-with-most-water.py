class Solution:
    def maxArea(self, h: List[int]) -> int:
        m=0
        l=0
        r=len(h)-1
        while l<r:
            m=max(m,(r-l)*min(h[l],h[r]))
            if h[l]<h[r]:
                l+=1
            else:
                r-=1
        return m