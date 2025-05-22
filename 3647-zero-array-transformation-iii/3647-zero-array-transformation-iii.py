class Solution:
    def maxRemoval(self, nums: List[int], queries: List[List[int]]) -> int:
        queries.sort(key=lambda x : x[0])

        active_queries = [] # store only ending of the query range
        available = [] # store only ending of the query range
        used = 0
        ind = 0

        for i, num in enumerate(nums):
            # remove inactive queries
            while active_queries and active_queries[0] < i:
                heapq.heappop(active_queries)
            
            while ind < len(queries) and queries[ind][0] == i:
                # store the ending - negate for max heap
                heapq.heappush(available, -queries[ind][1])       
                ind += 1
            
            while len(active_queries) < num and available and -available[0] >= i:
                heapq.heappush(active_queries, -heapq.heappop(available))
                used += 1

            if len(active_queries) < num:
                return -1

        return len(queries) - used