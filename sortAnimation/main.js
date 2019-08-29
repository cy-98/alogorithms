const width = 600, height = 400, margin = 1;
const column_width = 30;
const length = ~~(width/(column_width+margin))
const defaultColor = '#64e291',
      sortedColor = '#e6e56c',
      indexIColor = '#fec771',
      indexJColor = '#eb7070';
let  AnimationTime = 0;
let arr = new Array();

window.onload=()=>{
    let canvas = document.getElementById('canvas');
    canvas.width = width;
    canvas.height = height;
    let ctx = canvas.getContext('2d');
    init();
    sort(ctx,arr);
}
const init = ()=>{//初始化数组  并且开始排序动画
    for(let i = 0; i < length; i++){
        arr[i] = ~~(Math.random()* (height + 1));
    }
}

const sort = (ctx,arr)=>{//快速排序
    updateView(ctx,copyArr(arr),0,arr.length-1)
    partition(ctx,arr,0,arr.length-1)
}

const partition = (ctx,arr,left,right)=>{
    if(left > right ) return
    let i = left,j = right;
    let key = arr[j];
    while(i < j){
        while( i < j && arr[i] < key ){
            i++;                //移动指针也更新图层
            updateView(ctx,copyArr(arr),i,j);
            if(i === j) break
        }
        arr[j] = arr[i]         //交换元素更新图层  
        updateView(ctx,copyArr(arr),i,j);
        while(i < j && arr[j] > key ){
            j--;
            updateView(ctx,copyArr(arr),i,j);
            if(i === j) break
        }
        arr[i] = arr[j];
        updateView(ctx,copyArr(arr),i,j);
    }
    arr[j] = key;
    partition(ctx,arr,left,i-1);
    partition(ctx,arr,i+1,right);
}

const updateView = (ctx,arr,indexI,indexJ)=>{
    setTimeout(() => {
        render(ctx,arr,indexI,indexJ)
    }, AnimationTime++ * 80);
}
const render = (ctx,arr,indexI,indexj)=>{
    ctx.clearRect(0,0,width,height);
    draw(ctx,arr,indexI,indexj)
}
const draw = (ctx,arr,indexI,indexj)=>{
    for(let i = 0;i < length; i++){
        if(i < indexI){
            ctx.fillStyle = sortedColor;
        }else if(i === indexI){
            ctx.fillStyle = indexIColor;
        }else if(i === indexj){
            ctx.fillStyle = indexJColor;
        }else if(i > indexj){
            ctx.fillStyle = sortedColor;
        }else{
            ctx.fillStyle = defaultColor;
        }
        ctx.fillRect(i * column_width,300,column_width,-arr[i])
    }
}
const copyArr = (arr)=>{//避免用到闭包中的数组 深拷贝一个数组
    return arr.concat()
}
