
// 例如 ['Hello World', 'Goodbye World'] 处理成
// [['Hello', 'World'], ['Goodbye', 'World']]
const sentens = (item)=> { 
   return  item.map( words => words.split(' ') )
}
console.log(sentens( ['Hello World', 'Goodbye World'] ))
