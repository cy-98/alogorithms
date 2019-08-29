let arr = [54,78,64,48,33,52,69,77,57,60]
const Qsort = (arr)=>{
    let left = 0,right = arr.length-1;
    const  partition = (arr,left,right)=>{
        if(left > right ) return 
        let i = left,j = right;
        let key = arr[j];//枢轴记录
        while(i<j){
            while(i < j && arr[i] < key){
                i++;
            }
            arr[j] = arr[i];
            while(i < j && arr[j] > key){
                j--;
            }
            arr[i] = arr[j];
        }
        arr[j] = key;           //最后将枢轴记录放在中间
        partition(arr,left,i-1);
        partition(arr,i+1,right);
    }
    partition(arr,left,right)
    return arr
}
console.log(
    Qsort(arr)
)