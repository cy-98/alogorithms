
function findSort(arr) {

    let res = []

    let l = arr.length
    // let t = 0
    for(let i = 0; i< l ; i ++){
        getItem(newItem(arr,i))
    }
    function getItem(arr) {

        let t = 0,
            temp = []
            temp.push(arr.shift())

        let length = arr.length

        for( t; t < length; t++ ){
            temp.push( arr.pop() )    //4, 123
            let subItem = [...temp, ...arr]
            res.push(subItem)
            // getItem(subItem)
        }
    }

    function newItem(arr,t) {
        let newA = [...arr]
        return [...newA.splice(t,1),...newA]
    }
    return res
}
const arr = [1,2,3]
findSort(arr)
/**
 * 
[
  [ 1, 3, 2 ],
  [ 1, 3, 2 ],
  [ 2, 3, 1 ],
  [ 2, 3, 1 ],
  [ 3, 2, 1 ],
  [ 3, 2, 1 ]
]
 */