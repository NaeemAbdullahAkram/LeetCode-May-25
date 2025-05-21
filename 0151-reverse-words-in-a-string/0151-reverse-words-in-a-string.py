class Solution:
    def reverseWords(self, s: str) -> str:
        l=s.split()
        s=""
        for x in range(len(l)-1,-1,-1):
            if(x!=0):
                s=s+str(l[x])+" "
            else:
                s+=str(l[x])
        return s

        