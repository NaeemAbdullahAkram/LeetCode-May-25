class Solution:
    def colorTheGrid(self, m: int, n: int) -> int:
        pat = []
        col = [0, 1, 2]
        def dfs(x, s):
            if x == m:
                pat.append(s)
                return
            for i in col:
                if x == 0 or s[x - 1] != i:
                    dfs(x + 1, s + [i])
        dfs(0, [])

        l = len(pat)
        valid = [[True for _ in range(l)] for _ in range(l)]

        for i in range(l):
            for j in range(i + 1, l):
                for k in range(m):
                    if pat[i][k] == pat[j][k]:
                        valid[i][j] = False
                        break
        
        dp = [[0 for _ in range(l)] for _ in range(n)]
        mod = 1_000_000_007
        for i in range(l):
            dp[0][i] = 1

        for i in range(1, n):
            for x in range(l):
                for y in range(x + 1, l):
                    if valid[x][y]:
                        dp[i][x] = (dp[i][x] + dp[i-1][y]) % mod
                        dp[i][y] = (dp[i][y] + dp[i-1][x]) % mod
        
        ans = 0
        for i in range(l):
            ans = (ans + dp[-1][i]) % mod

        return ans