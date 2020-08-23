const log = console.log.bind(console)

const e = function(selector) {
    let element = document.querySelector(selector)
    if (element === null) {
        // let s = `选择器 ${selector} 写错了, 请仔细检查并且复习三种基本的选择器`
        // alert(s)
        return null
    } else {
        return element
    }
}

const es = function(selector) {
    let elements = document.querySelectorAll(selector)
    if (elements.length === 0) {
        let s = `选择器 ${selector} 写错了, 请仔细检查并且复习三种基本的选择器`
        alert(s)
        return []
    } else {
        return elements
    }
}
const appendHtml = function(element, html) {
    element.insertAdjacentHTML('beforeend', html)
}

const bindEvent = function(element, eventName, callback) {
    element.addEventListener(eventName, callback)
}

const removeClassAll = function(className) {
    let selector = '.' + className
    let elements = es(selector)
    for (let i = 0; i < elements.length; i++) {
        let e = elements[i]
        e.classList.remove(className)
    }
}

const bindAll = function(selector, eventName, callback) {
    let elements = es(selector)
    for (let i = 0; i < elements.length; i++) {
        let e = elements[i]
        bindEvent(e, eventName, callback)
    }
}

// find 函数可以查找 element 的所有子元素
const find = function(element, selector) {
    let e = element.querySelector(selector)
    if (e === null) {
        let s = `选择器 ${selector} 写错了, 请仔细检查并且复习三种基本的选择器`
        alert(s)
        return null
    } else {
        return e
    }
}

const closestClass = function(element, className) {
    /*
    element 是一个 DOM 元素
    className 是一个 string
    循环查找 element 的直系父元素
    如果父元素拥有 className 这个 class, 则返回这个父元素
    body 的 parentElement 是 html，html 的 parentElement 是 null
    如果找到最上面的元素都还没有找到（也就是找到 html 的 parentElement）, 则返回 null
    */
    let e = element
    while (e !== null) {
        if (e.classList.contains(className)) {
            return e
        } else {
            e = e.parentElement
        }
    }
    // 如果找到最上面都没有找到, 直接返回 null
    return null
}

// 实现 closestId 函数
const closestId = function(element, idName) {
    /*
    element 是一个 DOM 元素
    idName 是一个 string
    循环查找 element 的直系父元素
    如果父元素拥有 idName 这个 id, 则返回这个父元素
    body 的 parentElement 是 html，html 的 parentElement 是 null
    如果找到最上面的元素都还没有找到（也就是找到 html 的 parentElement）, 则返回 null

    提示
    假设 a 是一个标签, 用 a.id 来获取它的 id
    直接复制并且修改前面作业的代码
    */
    let e = element
    while (e !== null) {
        if (e.id === idName) {
            return e
        } else {
            e = e.parentElement
        }
    }
    // 如果找到最上面都没有找到, 直接返回 null
    return null
}

const closestTag = function(element, tagName) {
    /*
    element 是一个 DOM 元素
    tagName 是一个 string
    循环查找 element 的直系父元素
    如果父元素是一个 tagName 标签, 则返回这个父元素
    body 的 parentElement 是 html，html 的 parentElement 是 null
    如果找到最上面的元素都还没有找到（也就是找到 html 的 parentElement）, 则返回 null


    tagName 是 'div' 'p' 'h1' 这样的标签名
    获取一个 DOM 元素的标签名的方法如下
    element.tagName
    需要注意的是, tagName 属性返回的标签名是大写的
    例如 'DIV' 'H1'
    所以你在比较的时候需要把 tagName 转换为大写字母
    使用如下 js 标准库函数转换
    tagName.toUpperCase()

    直接复制并且修改前面作业的代码
    */
    let e = element
    while (e !== null) {
        if (e.tagName.toUpperCase() === tagName.toUpperCase()) {
            return e
        } else {
            e = e.parentElement
        }
    }
    // 如果找到最上面都没有找到, 直接返回 null
    return null
}

const closest = function(element, selector) {
    /*
    element 是一个 DOM 元素
    selector 是一个 string, 表示一个选择器
    可能的值是  'div'  '#id-div-gua'  '.red' 这三种

    循环查找 element 的直系父元素
    如果父元素符合选择器, 则返回这个父元素
    body 的 parentElement 是 html，html 的 parentElement 是 null
    如果找到最上面的元素都还没有找到（也就是找到 html 的 parentElement）, 则返回 null

    提示
    判断选择器的第一个字符来决定如何比较
    直接复制并且修改前面作业的代码
    */
    let c = selector[0]
    if (c === '#') {
        let idName = selector.slice(1)
        let r = closestId(element, idName)
        return r
    } else if (c === '.') {
        let className = selector.slice(1)
        let r = closestClass(element, className)
        return r
    } else {
        let r = closestTag(element, selector)
        return r
    }

    // 常见错误写法
    // for (let i = 0; i < array.length; i++) {
    //     if (array[i] > 0) {
    //         return a
    //     } else {
    //         return false
    //     }
    // }
}
