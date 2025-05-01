class Solution {
public:
    bool isValid(vector<int>& tasks, vector<int>& workers,int ind, int pills, int strength){
        multiset<int>st;
        for(auto it: workers){
            st.insert(it);
        }
        for(int i=ind-1; i>=0; i--){
            auto it=st.lower_bound(tasks[i]);
            if(it!=st.end()){
                st.erase(it);
            }
            else{
                if(pills<=0){
                    return false;
                }
                else{
                    it=st.lower_bound(tasks[i]-strength);
                    if(it!=st.end()){
                        st.erase(it);
                        pills--;
                    }
                    else{
                        return false;
                    }

                }
            }
        }
        return true;
    }
    int maxTaskAssign(vector<int>& tasks, vector<int>& workers, int pills, int strength) {
       //we will use binary search
       // sort task and workers
       // at low=1 high=min(T, W);
       // will find mid 
       // will check wthether we can complete mid number of task 
       // if yes then set low=mid;
       // else high=mid-1;
       //is valid(mid)
       // in this function we will puts workes in multiset 
       // we will iterate from tasks which require large amoiu
       // we will check in multiset task just close to workers strength
       // if we found then increment the count remove it from set
       // if we are not able to find the workers of required strength then we will use pills and try to again find the workers with strength atleast(task-strength  if we have available pills)
       int T=tasks.size();
       int W=workers.size();
       sort(tasks.begin(), tasks.end());
       sort(workers.begin(), workers.end());
       int low=0;
       int high=min(T, W);
       while(low<high){
           int mid=(low+high+1)/2;
           
           if(isValid(tasks, workers, mid, pills, strength)){
               low=mid;

           }
           else{
               high=mid-1;
           }

       }

         
    return high;


    }
};