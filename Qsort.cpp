#include<iostream>
using namespace std;
void Qsort( int arr [] ,int low,int hight ){
    if(low > hight) return;
    int i = low         ;
    int j = hight - 1   ;
    int key = arr[j]    ;
    // int tmp;            枢轴记录只需要记录一次
    while(i < j){
        while( arr[i] < key){
            i++;
            if(i == j) break;
        }
        arr[j] = arr[i];     //找到左边比枢轴记录大的元素  给【j】 此时原本【j】的值在key中
        while(arr[j] > key){
            j--;
            if(i == j) break;
        }
        arr[i] = arr[j];     //找到右边比枢轴记录小的元素  给【i】 此时原本【i】的值在【j】中
                            //所以不用三次记录来互相交换值
    }
    arr[j] = key;           //最后将枢轴记录放在中间
    Qsort(arr,low,i-1);
    Qsort(arr,i+1,hight);
}
int main(){
    int a[] = {57, 68, 59, 52, 72, 28, 96, 33, 50};
    Qsort(a, 0, sizeof(a) / sizeof(a[0]) - 1);/*这里原文第三个参数要减1否则内存越界*/
    for(int i = 0; i < sizeof(a) / sizeof(a[0]) -1; i++)
    {
        cout << a[i]<<",";
    }
    return 0;
} 
