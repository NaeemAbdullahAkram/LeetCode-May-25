class Solution {
public:
    bool isSubsequence(string s, string t) {
        int cnt=0,i=0;
        for(auto u:t)
        {
            if(u==s[i])
            {
                cnt++;
                i++;
            }
        }
        if(cnt==s.size())
        {
            return true;
        }
        return false;
    }
};