Promise.all = function (arr){ 
    let i = 0;
    return new Promise((resolve,reject)=>{
        for(let p of arr){
            p.then((str)=>{
                i++;
                if(i === arr.length){
                    resolve("all ok");
                }
            }).catch((err)=>{
                reject('not ok');
            });
        }
    }).then((str)=>{
        console.log(str)
    });
}



const p1 = new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve('p1 not over')
    }, 200);
});
p1.then(()=>{
    console.log('then1');
});
const p2 = new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve('p2 over')
    }, 300);
})
const p3 = new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve('p3 over')
    }, 400);
})

const pro = new Promise((resolve,reject)=>{
    resolve()
})
pro.then(()=>{
    console.log(1)
})
pro.then(()=>{
    console.log(2)
})
Promise.all([p1,p2,p3])