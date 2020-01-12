
//双指针 哈希表比对字符 决定后指针继续是否匹配

function find (str) {
    let max = ''
    
    for (let i = 0; i < str.length; i++) {
        let temp = ''
        let map = {}

        map[ str[i] ] = true
        temp += str[i]

        for(let j = i +1; j < str.length; j++) {
            if (map[ str[j] ]) { break }
            map[ str[j] ] = true
            temp += str[j]
        }   

        map = {}
        max = temp.length > max.length ? temp : max
        temp = ''
    }

    return max.length
} 

console.log(find('pwwkewasdbks'))