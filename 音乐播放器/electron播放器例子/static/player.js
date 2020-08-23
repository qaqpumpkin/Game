// require 是 electron 自带的函数
// fs 是一个操作文件的库
const fs = require('fs')
const path = require('path')

const log = console.log.bind(console)

const e = (selector) => document.querySelector(selector)

const appendHtml = (element, html) => element.insertAdjacentHTML('beforeend', html)

// 把 fs.readdir 封装成 promise 的形式, 方便使用
const readdir = (path) => {
    let p = new Promise((resolve, reject) => {
        fs.readdir(path, (error, files) => {
            if (error !== null) {
                reject(error)
            } else {
                resolve(files)
            }
        })
    })
    return p
}

const templateAudio = (audio) => {
    let t = `
        <li class="gua-song">
            <a href="#" data-href="${audio}">${audio}</a>
        </li>
    `
    return t
}

const insertAudio = (audio) => {
    let container = e('#id-ul-song-list')
    let html = templateAudio(audio)
    appendHtml(container, html)
}

const insertAudios = (audios) => {
    for (let a of audios) {
        insertAudio(a)
    }
}

const loadAudio = () => {
    let dir = 'audios'
    let pathname = path.join(__dirname, dir)
    readdir(pathname).then((files) => {
        // files 是 audios 目录下的文件
        // 从这些文件中筛选以 .mp3 结尾的文件, 也就是 mp3 文件
        let audios = files.filter((e) => e.endsWith('.mp3'))
        insertAudios(audios)
    })
}

const actionPlay = (player, event) => {
    let self = event.target
    let href = self.dataset.href
    // 用 path.join 拼接好 mp3 文件的路径
    let src = path.join(__dirname, 'audios', href)
    log('音乐文件的路径', src)
    player.src = src
    player.play()
}

const actionEnded = (player, mode) => {
    log("播放结束, 当前播放模式是", mode)
    // 如果播放模式是 loop 就重新播放
    if (mode === 'loop') {
        player.play()
    } else {
        log('mode', mode)
    }
}

const bindEventPlay = (player) => {
    let container = e('#id-ul-song-list')
    container.addEventListener('click', (event) => {
        let self = event.target
        if (self.tagName.toLowerCase() === 'a') {
            // 取消 a 标签的默认行为
            event.preventDefault()
            actionPlay(player, event)
        }
    })

    // 注意, 我们也可以使用 jQuery 库来实现事件委托
    // 给 id 为 id-ul-song-list 的元素下的 a 标签添加一个点击事件
    // 这是 jQuery 的事件委托语法
    // 如果 on 函数有三个参数, 那么第一个参数是 事件类型, 第二个参数是响应事件的元素
    // 第三个参数是事件发生后的回调函数
    // $('#id-ul-song-list').on('click', 'a', (event) => {
    //     actionPlay(player, event)
    // })
}

const bindEventEnded = (player) => {
    let mode = player.dataset.mode
    player.addEventListener('ended', (event) => {
        actionEnded(player, mode)
    })
}

const bindEvents = () => {
    // 找到 audio 标签并赋值给 player
    let player = e('#id-audio-player')

    bindEventPlay(player)
    bindEventEnded(player)
}

const __main = () => {
    bindEvents()
    loadAudio()
}

__main()
