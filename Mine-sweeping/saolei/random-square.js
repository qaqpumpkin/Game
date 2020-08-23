const clonedArray = function(array) {
    let l = []
    l = array.slice(0)
    return l
}
const clonedSquare = function(array) {
    let l = []
    for (let i = 0; i < array.length; i++) {
        l.push(clonedArray(array[i]))
    }
    return l
}

const markedSquare = function(array) {
    let square = []
    square = clonedSquare(array)
    let row = square.length
    let list = square[0].length
    return markAround(square, row, list)
}
const Add = function (a) {
    if (a == 9) {
        return 9
    } else {
        return  a + 1
    }
}

const markAround = function (array, row, list) {
    let l = []
    l = clonedSquare(array)
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < list; j++) {
            // 四个角
            if (l[i][j] == 9 && i === 0 && j === 0) {
                l[i][j + 1] = Add(l[i][j + 1])
                l[i + 1][j] = Add(l[i + 1][j])
                // 右下
                l[i + 1][j + 1] = Add(l[i + 1][j + 1])
            } else if (l[i][j] == 9 && i === (row - 1) && j === 0) {
                l[i][j + 1] = Add(l[i][j + 1])
                l[i - 1][j] = Add(l[i - 1][j])
                // 右上
                l[i - 1][j + 1] = Add(l[i - 1][j + 1])
            } else if (l[i][j] == 9 && i === 0 && j === (list - 1)) {
                l[i][j - 1] = Add(l[i][j - 1])
                l[i + 1][j] = Add(l[i + 1][j])
                // 左下
                l[i + 1][j - 1] = Add(l[i + 1][j - 1])
            } else if (l[i][j] == 9 && i === (row - 1) && j === (list - 1)) {
                l[i][j - 1] = Add(l[i][j - 1])
                l[i - 1][j] = Add(l[i - 1][j])
                // 左上
                l[i - 1][j - 1] = Add(l[i - 1][j - 1])
                // 四条边
            } else if (l[i][j] == 9 && i === 0) {
                l[i][j - 1] = Add(l[i][j - 1])
                l[i][j + 1] = Add(l[i][j + 1])
                l[i + 1][j] = Add(l[i + 1][j])
                // 上边：需要左下和右下
                l[i + 1][j + 1] = Add(l[i + 1][j + 1])
                l[i + 1][j - 1] = Add(l[i + 1][j - 1])
            } else if (l[i][j] == 9 && i === (row - 1)) {
                l[i][j - 1] = Add(l[i][j - 1])
                l[i][j + 1] = Add(l[i][j + 1])
                l[i - 1][j] = Add(l[i - 1][j])
                // 下边：需要左上和右上
                l[i - 1][j - 1] = Add(l[i - 1][j - 1])
                l[i - 1][j + 1] = Add(l[i - 1][j + 1])
            } else if (l[i][j] == 9 && j === (list - 1)) {
                l[i + 1][j] = Add(l[i + 1][j])
                l[i - 1][j] = Add(l[i - 1][j])
                l[i][j - 1] = Add(l[i][j - 1])
                // 右边：需要左上和左下
                l[i - 1][j - 1] = Add(l[i - 1][j - 1])
                l[i + 1][j - 1] = Add(l[i + 1][j - 1])
            } else if (l[i][j] == 9 && j === 0) {
                l[i + 1][j] = Add(l[i + 1][j])
                l[i - 1][j] = Add(l[i - 1][j])
                l[i][j + 1] = Add(l[i][j + 1])
                // 左边：需要右上和右下
                l[i + 1][j + 1] = Add(l[i + 1][j + 1])
                l[i - 1][j + 1] = Add(l[i - 1][j + 1])
            } else if (l[i][j] == 9) {
                l[i + 1][j] = Add(l[i + 1][j])
                l[i - 1][j] = Add(l[i - 1][j])
                l[i][j + 1] = Add(l[i][j + 1])
                l[i][j - 1] = Add(l[i][j - 1])
                l[i - 1][j - 1] = Add(l[i - 1][j - 1])
                l[i + 1][j - 1] = Add(l[i + 1][j - 1])
                l[i + 1][j + 1] = Add(l[i + 1][j + 1])
                l[i - 1][j + 1] = Add(l[i - 1][j + 1])
            }
        }
    }
    return l
}
