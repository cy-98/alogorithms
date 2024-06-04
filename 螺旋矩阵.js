// https://leetcode.cn/problems/spiral-matrix-ii/
function generateMatrix(n) {
    let startX = 0;
    let startY = 0;

    let offset = 1;
    let loop = Math.floor(n / 2);
    const mid = Math.floor(n / 2);

    const result =
        new Array(n).fill(0).map(() => new Array(n).fill(0))


    let a = 1; // n * n
    while (loop--) {
        let i = startY;
        let j = startX;

        for (; j < n - offset; j++) {
            result[i][j] = a * a;
            a++;
        }

        for (; i < n - offset; i++) {
            result[i][j] = a * a;
            a++;
        }
        for (; j > startX; j--) {
            result[i][j] = a * a;
            a++;
        }
        for (; i > startY; i--) {
            result[i][j] = a * a;
            a++;
        }

        startX++
        startY++
        offset += 1
    }


    if (n % 2 !== 0) {
        result[mid][mid] = a * a
    }


    return result
};

console.log(generateMatrix(3))