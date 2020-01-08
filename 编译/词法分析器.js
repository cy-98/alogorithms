function lexicalAnalysis ( expression ) {
    const symbol = ['(',')','+','-','*','/']
    const re     = /\d/                     //匹配数字
    const tokens = []                       //保存终结符
    const chars  = expression.trim().split('')

    let token    = ''
    chars.forEach( c => {

        if ( re.test(c) ){
            token += c
        } else 
        if ( token && c === ' ' ) {
            tokens.push( token )
            token = ''
        } else
        if ( symbol.includes( c ) ) {
            if( token ) {
                tokens.push( token )
                token = ''
            } 
            tokens.push( c )
        }
    })

    if ( token ) {
        tokens.push( token )
    }

    return tokens
}
console.log(
    lexicalAnalysis('100  +   23   +  34 * 10 / 2')
)


     