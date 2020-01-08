function CpuEmulator (instructions) {

    this.ins = instructions.split('\r\n')
    this.memory = []
    this.re = /^(push)\s\w+/
    this.execute()
}

CpuEmulator.prototype = {

    execute () {
        this.ins.forEach( i => {
            switch ( i ) {
                case 'add' :
                    this.add()
                    break
                case 'sub' :
                    this.sub()
                    break
                case 'mul' :
                    this.mul()
                    break
                case 'div' :
                    this.div()
                    break
                default :
                    if( this.re.test(i) ) this.push( i.split(' ')[1] )
            }
        })
    },

    add () {                //取出两个操作数 相加后入栈
        this.memory.push( this.pop() + this.pop() )
    },

    sub () {                //取出两个操作数 相减后入栈
        this.memory.push( this.pop() - this.pop() )
    },

    mul () {                //取出两个操作数 相乘后入栈
        this.memory.push( this.pop() * this.pop() )
    },

    div () {
        this.memory.push( this.pop() / this.pop() )
    },

    getResult () {
        return this.memory[0]
    }
}

const cpu = new CpuEmulator( instructions )
console.log(
    cpu.getResult()
)