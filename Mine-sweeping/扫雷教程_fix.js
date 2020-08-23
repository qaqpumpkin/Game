// 实现扫雷程序的流程如下
// 1, 生成扫雷数据
// 2, 根据扫雷数据画图
// 3, 点击的时候根据情况判断
//      因为展开的时候需要对周围的数字进行处理, 所以最好能在地图上记录下标
//
// 为了方便, 我们跳过第一步, 直接用下面给定的数据即可, 这样方便测试
// 直接写死数据
// let s = ' [[9,1,0,0,0,1,1,1,0],[1,1,0,0,1,2,9,1,0],[1,1,1,0,1,9,2,1,0],[1,9,2,1,1,1,1,0,0],[1,2,9,1,0,0,1,1,1],[1,2,1,1,0,1,2,9,1],[9,1,0,0,1,2,9,2,1],[1,2,1,1,1,9,2,1,0],[0,1,9,1,1,1,1,0,0]]'
// 把字符串转成数组
// let square = JSON.parse(s)

// 以我们这个数据为例, 网页布局实际上应该 9 * 9 的格子
// cell 用 float 完成布局, clearfix 是用来解决浮动的方案
// 每一行处理成下面的形式
// data-number 是数字, data-x 和 data-y 分别是数组中的下标
// data-x="0" data-y="3" 表示 square[0][3], 也就是第 1 行第 4 列的格子
// <div class="row clearfix">
//     <div class="cell" data-number="9" data-x="0" data-y="0">9</div>
//     <div class="cell" data-number="1" data-x="0" data-y="1">1</div>
//     <div class="cell" data-number="0" data-x="0" data-y="2">0</div>
//     <div class="cell" data-number="0" data-x="0" data-y="3">0</div>
//     <div class="cell" data-number="0" data-x="0" data-y="4">0</div>
//     <div class="cell" data-number="1" data-x="0" data-y="5">1</div>
//     <div class="cell" data-number="1" data-x="0" data-y="6">1</div>
//     <div class="cell" data-number="1" data-x="0" data-y="7">1</div>
//     <div class="cell" data-number="0" data-x="0" data-y="8">0</div>
// </div>
const random = function () {
    let n = Math.random()
    n = n * 9
    n = Math.floor(n)
    return n % 3
}
const randomLine = function (n) {
    let l = []
    for (let i = 0; i < n; i++) {
        let e = random()
        l.push(e)
    }
    return l
}
const randomSquare = function (n) {
    let l = []
    for (let i = 0; i < n; i++) {
        let e = randomLine(n)
        l.push(e)
    }
    return l
}
// 1. templateCell 函数, 参数为数组 line 和变量 x, x 表示第几行
// 返回 line.length 个 cell 拼接的字符串
const templateCell = function(line, x) {
    let str = ''
    for (let i = 0; i < line.length; i++) {
        let n = line[i]
        str += `<div class="cell" data-number="${n}" data-x="${x}" data-y="${i}">` + `${n}` + '</div>'
    }
    return str
}

// 2. templateRow 的参数 square 是二维数组, 用来表示雷相关的数据
// 返回 square.length 个 row 拼接的字符串
// row 的内容由 templateCell 函数生成
const templateRow = function(square) {
    let str = ''
    for (let i = 0; i < square.length; i++) {
        str += '<div class="row clearfix">'
        str += templateCell(square[i], i)
        str += '</div>'
    }
    return str
}

// 3. square 是二维数组, 用来表示雷相关的数据
// 用 square 生成 9 * 9 的格子, 然后插入到页面中
// div container 是 <div id="id-div-mime"></div>
const renderSquare = function(square) {
    let
}

// 4. 实现 bindEventDelegate 函数, 只处理格子, 也就是 .cell 元素
const bindEventDelegate = function(square) {

}

// 5. vjkl 是点击格子的函数
// 要注意的是我们在初始情况下就把数字写到了 html 中
// <div class="cell" data-number="1" data-x="0" data-y="1">1</div>
// 而初始情况下数字不应该显示出来的, 可以直接用 font-size: 0; 来隐藏文字
// 点击的时候根据情况用 font-size: 14px;
// (当然这一步应该用 class 来完成, 比如添加 opened class) 的方式显示文字
// 如果已经显示过, 则不做任何处理
// 如果没有显示过, 判断下列情况
// 1. 如果点击的是 9, 展开, 游戏结束
// 2. 如果点击的是 0, 展开并且调用 vjklAround 函数
// 3. 如果点击的是其他数字, 展开
const vjkl = function(cell, square) {

}

// 6. vjklAround 展开周围 cell 周围 8 个元素,
// x 和 y 分别是下标
// 展开周围的元素通过调用 vjkl1 来解决
const vjklAround = function(square, x, y) {

}

// 7. vjkl1 是重点函数
// 如果满足边界调节, 则继续
// 因为 vjkl1 这个函数是展开格子, 所以如果已经展开过, 那么就不展开元素
// 根据 x 和 y 还有属性选择器选择出格子, 具体可以参考
// https://developer.mozilla.org/zh-CN/docs/Web/CSS/Attribute_selectors
// 如果没有展开过, 判断下列情况
// 如果碰到的是 9, 什么都不做.
// 注意, 这里 9 的处理方式和直接点击格子 9 的处理方式不一样
// 如果碰到的是 0, 递归调用 vjklAround 函数
// 如果碰到的是其他元素, 展开
const vjkl1 = function(square, x, y) {

}
