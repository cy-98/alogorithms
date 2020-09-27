const p = Promise.resolve()
p.then(() => {
    console.log(1)
})

console.log(2)