class Solution {
    private:
    void helper(vector<vector<int>>&adj,vector<bool>&c,int n){
        vector<bool>vis(n+1,false);
        queue<pair<int,int>>q;
        q.push({0,true});

        while(!q.empty()){
            auto it = q.front();
            q.pop();

            int node=it.first;
            bool color=it.second;
            vis[node]=true;

            c[node]=color;

            for(auto it : adj[node]){
                if(!vis[it])
                q.push({it,!color});
            }
        }
    }
public:
    vector<int> maxTargetNodes(vector<vector<int>>& edges1, vector<vector<int>>& edges2) {
        int n=edges1.size();
        int m=edges2.size();
        vector<vector<int>>adj1(n+1);
        vector<vector<int>>adj2(m+1);

        for(auto it : edges1){
            int u=it[0];
            int v=it[1];

            adj1[u].push_back(v);
            adj1[v].push_back(u);
        }
        for(auto it : edges2){
            int u=it[0];
            int v=it[1];

            adj2[u].push_back(v);
            adj2[v].push_back(u);
        }
        vector<bool>c1(n+1);
        vector<bool>c2(m+1);

        helper(adj1,c1,n);
        helper(adj2,c2,m);

        int C1True=0;
        int C1False=0;
        int C2True=0;
        int C2False=0;

        for(auto it : c1){
            if(it)
            C1True++;
            else
            C1False++;
        }

        for(auto it : c2){
            if(it)
            C2True++;
            else
            C2False++;
        }
        int maxi=max(C2True,C2False);
        vector<int>ans;
        for(int i=0;i<=n;i++){
            if(c1[i])
            ans.push_back(C1True+maxi);
            else
            ans.push_back(C1False+maxi);
        }
        return ans;
    }
};