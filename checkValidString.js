/**

 * 给定一个只包含三种字符的字符串：（ ，） 和 *，写一个函数来检验这个字符串是否为有效字符串。有效字符串具有如下规则：
    任何左括号 ( 必须有相应的右括号 )。
    任何右括号 ) 必须有相应的左括号 ( 。
    左括号 ( 必须在对应的右括号之前 )。
    * 可以被视为单个右括号 ) ，或单个左括号 ( ，或一个空字符串。
    一个空字符串也被视为有效字符串。}
 */

// 暴力解法
var checkValidString = function (s) {
    let countLeft = 0
    let countRight = 0
    let countChar = 0

    for (let i = 0; i < s.length; i++) {
        s[i] === '(' && countLeft++
        s[i] === ')' && countRight++
        s[i] === '*' && countChar++
    }
    if (countChar < Math.max(countLeft, countRight) - Math.min(countLeft, countRight)) {
        return false
    }

    const tokenList = [')', '']
    let isValid = false

    let arr = [s]
    while (arr.length) {
        const value = arr.pop()
        isValid = judge(value)
        if (isValid) return isValid
    }

    return isValid

    function judge(string) {
        const stack = []
        for (let i = 0; i < string.length; i++) {
            if (stack.length > string.length - i) return false
            if (string[i] === '(') {
                stack.push(string[i])
            } else if (string[i] === ')') {
                if (!stack.length) return false
                stack.pop()
            } else if (string[i] === '*') {
                string = string.slice(0, i) + '(' + string.slice(i + 1)

                const newStrArr = tokenList.map(token => {
                    return string.slice(0, i) + token + string.slice(i + 1)
                })
                arr = arr.concat(newStrArr)

                i--
            }
        }
        if (stack.length) return false
        return true
    }
};


// 双向遍历
function (s) {

    const reverseStr = s
        .split('')
        .reverse()
        .map(str => {
            if (str === '*') return str
            return str === '(' ? ')' : '('
        })
        .join('')
    return judge(s) && judge(reverseStr)

    function judge(string) {
        console.log(string)
        const charStack = []
        const stack = []

        for (let i = 0; i < string.length; i++) {
            if (string[i] === '(') {
                stack.push('(')
            }

            else if (string[i] === ')') {
                if (stack.length) {
                    stack.pop()
                }
                else if (charStack.length) {
                    charStack.pop()
                }
                else {
                    return false
                }
            }

            else if (string[i] === '*') {
                charStack.push('*')
            }
        }

        if (stack.length > charStack.length) return false
        if (stack.length === charStack.length) return true
        return true
    }
};
