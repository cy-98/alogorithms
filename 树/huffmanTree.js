function huffTree (arr) {
    let data = Math.min(...arr)

    if ( arr.length === 1 ) {
        data = arr[0]
    }
    
    this.data  = ''
    this.left  = ''
    this.right = ''
}