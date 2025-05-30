class Solution:
    def closestMeetingNode(self, edges: List[int], node1: int, node2: int) -> int:
        n = len(edges)
        bestNode = -1
        minMaxDistance = float('inf')
        
        def bfsDistances(start: int) -> List[int]:
            distances = [-1] * n
            queue = deque([start])
            distances[start] = 0
            
            while queue:
                curr = queue.popleft()
                nextNode = edges[curr]
                
                if nextNode != -1 and distances[nextNode] == -1:
                    distances[nextNode] = distances[curr] + 1
                    queue.append(nextNode)
            
            return distances
        
        distances1 = bfsDistances(node1)
        distances2 = bfsDistances(node2)
        
        for i in range(n):
            if distances1[i] >= 0 and distances2[i] >= 0:
                maxDistance = max(distances1[i], distances2[i])
                if maxDistance < minMaxDistance:
                    minMaxDistance = maxDistance
                    bestNode = i
        
        return bestNode        