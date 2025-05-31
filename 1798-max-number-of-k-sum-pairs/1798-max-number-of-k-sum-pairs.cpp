class Solution {
public:
    int maxOperations(vector<int>& nums, int k) {
        int n = nums.size();
        unordered_map<int,int> mp;
        int count = 0;
        for(int i=0;i<nums.size();i++){
            int val = k-nums[i];
            if(mp[val]>0){
                count++;
                mp[val]--;
            }
            else mp[nums[i]]++;
        }
        return count;
    }
};