

function AssemblyWriter() {
    this.output = ''
}

AssemblyWriter.prototype = {
    writePush( digit ) {
        this.output += `push ${digit}\r\n`  // 换行/n 行首/r
    },
    writeOP( op ) {
        this.output += `${ op } \r\n`
    },
    outputStr() {
        return this.output
    }
}

function Parser( tokens, writer ) {
    this.writer = writer
    this.tokens = tokens
    this.i = -1     //tokens 索引
    this.opMaadd = {
        '+' : 'add' ,
        '-' : 'sub' 
    }
    this.opMapmul = {
        '/' : 'div' ,
        '*' : 'mul' 
    }
    this.init()
}

Parser.prototype = {
    init() {
        this.compileExpression()  // 编译表达式
    },

    compileExpression() {
        this.compileAddExpr()     // 检查加法运算
    },

    compileAddExpr() {
        this.compileMulExpr()
        while(true) {
            this.getNextToken()

            if( this.opMaadd[this.token] ) {      // 匹配是否有此运算

                let op = this.opMaadd[this.token]
                this.compileMulExpr()
                this.writer.writeOP( op )
            } else {

                this.i -- 
                break
            }
        }
    },

    compileMulExpr() {
        this.compileTerm()

        while( true ) {
            this.getNextToken()

            if( this.opMapmul[this.token] ) {

                let op = this.opMapmul[this.token]
                this.compileTerm()
                this.writer.writeOP( op )
            } else {
                this.i --
                break
            }
        }
    },

    compileTerm() {
        this.getNextToken()

        if( this.token === '(' ) {

            this.compileExpression()
            this.getNextToken()
            if( this.token !== ')' ) {
                throw '缺少回括'
            } 
        } else 
        if ( /^\d+$/.test(this.token) ) {
                this.writer.writePush(this.token)
                console.log(1)
        } else {
                throw '错误的 token：第 ' + (this.i + 1) + ' 个 token (' + this.token + ')'
        }
        
    },

    getNextToken () {
        this.token= this.tokens[++this.i]
    },
    
    getInstructions () {
        return this.writer.outputStr()
    }
}

const tokens = lexicalAnalysis('100+10*10')
const writer = new AssemblyWriter()
const parser = new Parser(tokens, writer)
const instructions = parser.getInstructions()

console.log(instructions) // 输出生成的汇编代码

