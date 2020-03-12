// 检查timer执行数量


setTimeout(() => {
    console.log('immout1')
    
    setImmediate(()=>{
        console.log('imme')
    })
    process.nextTick(()=>{
        console.log('tick')
        setImmediate(()=>{
            console.log('imme1')
        })
    })
});
setTimeout(() => {
    console.log('immout2')
    setImmediate(()=>{
        console.log('imme2')
    })
},30);
setTimeout(() => {
    console.log('immout3')
});

// timer 阶段检查到所有的定时器都达到了阈值,执行完毕后进入poll阶段
// poll 阶段会轮询队列的回调函数

// 检查nextTick

// console.log('start')
// process.nextTick(()=>{
//     console.log('tick')
// })
// console.log('end')