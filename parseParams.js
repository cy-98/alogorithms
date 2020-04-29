const parseParams = (params) => {
    let querys = [],
        value
    for (const key in params) {
        value = params[key]
        if (Array.isArray(value)) {
            parseArr(key)
        } else {
            parseObj(value)
        }
    }
    return querys

    function parseArr(key) { // value: Array<string>
        // 拼接数组形式的query
        const value = params[key]
        let i, l = value.length;
        for (i = 0; i < l; i++) {
            querys.push(`${key}[]=${value[i]}`)
        }
    }

    function parseObj(obj) {
        // 拼接对象形式的query
        for (const key in obj) {
            const value = obj[key]
            querys.push(`${key}=${value}`)
        }
    }
}

console.log(
    parseParams({
        w: [1, 2, 4],
        q: {
            a: 1,
            b: 2
        }
    })
)