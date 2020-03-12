function queryStringfy(s) {
    const querys = {}
    const arr = s.split('&')
    arr.forEach(item => {
        const [key,value] = item.split('=')
        if(querys[key]){
            Array.isArray(querys[key]) && querys[key].push(value)
            !Array.isArray(querys[key]) && (querys[key] = [querys[key]]) && querys[key].push(value)
        }else{
            querys[key] = value
        }
    })
    return querys
}
console.log(
    queryStringfy('s=1&s=2&q=j&w=w')
)