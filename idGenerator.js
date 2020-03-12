function idGenerator(n=6) {
    let str = ''
    let charts = '12ghygklmnop34567890abcdefqrstuvwxyz'

    while(str.length<n) {
        str+=charts[ Math.floor(Math.random() * charts.length) ]
    }
    return str
}
