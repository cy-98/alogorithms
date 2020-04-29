function createIterator(items){
    let i = 0
    
    return {
        next:function(){
            let done = (i>items.length)
            let value = !done ? items[i++]:undefined

            return {
                done: done,
                value: value
            }
        }
    }
}

// gen(fn){
//     const a = awaiter(fn)
//     next(fn)
// }
function gen(fns, value) {
    let i = 0
    let result = value
    return {
        next:function(){
            const value = fns[i](result)
            const done = i > fns.length

            result = value
            gen.next()
            return {
                done:done,
                value:value
            }
        }
    }
}
gen(
    [(value)=>{
        console.log(value)
        return 2
    },(value)=>{
        console.log(value)
    }],
    1
).next()