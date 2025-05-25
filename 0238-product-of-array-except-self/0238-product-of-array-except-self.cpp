class Solution {
public:
    vector<int> productExceptSelf(vector<int>& nums) {
        int n=nums.size();

        vector<int>left(n-1,1);
        left.push_back(1);

        for(int i=1;i<n;i++){
            left[i]=left[i-1]*nums[i-1];
        }

        int right=1;
        for(int i=n-1;i>=0;i--){
            left[i]*=right;
            // Doing Multiplication From Right Side
            right*=nums[i];
        }
        return left;
    }
};