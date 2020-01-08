
// 例如 ['Hello World', 'Goodbye World'] 处理成
// [['Hello', 'World'], ['Goodbye', 'World']]
const sentens = (item)=> { return  item.map( words => words.split(' ') ) }

//编写一个函数，其作用是将输入的字符串反转过来。
const reverseStr = ( str ) => str.split('').reverse().join('')

//给定一个 32 位有符号整数，将整数中的数字进行反转。
const reverseInt = ( int ) => { 
   

   function Parser ( int ) {

      this.str = `${int}`
      this.stack =  [],
      this.charactor = ''
      this.output    = ''
      this.i = 0

      this.init()
   }

   Parser.prototype = {
      
      init(){
         this.parseExpr()
      },

      parseExpr() {
         this.parseChar()
      },

      parseChar() {
         let pos = /\+/,
             neg = /\-/

         if( pos.test( this.str[this.i] ) ) {
            this.charactor = this.str[this.i++]
         } else 
         if( neg.test( this.str[this.i] ) ) {
            this.charactor = this.str[this.i++]
         }

         this.parseNum()
      },

      parseNum() {

         while( this.str[this.i] ) {
            this.stack.push( this.str[this.i++] )
         }
         this.i = 0

         this.get()
      },

      get :function() {
         while( this.stack.length ) {

            let temp = this.stack.pop()

            if (!!this.i && temp !== 0 ) {
               this.i ++ 
               this.output += temp
            } else 
            if ( !this.i && temp === 0 ){
               this.stack.pop()
            } else {
               this.i++
               this.output += temp
            }

         }

         console.log( `${this.charactor}${this.output}` )
      },
   }

   return new Parser(int)

 }
 console.log(reverseInt('-0123'))