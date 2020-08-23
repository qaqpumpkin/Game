const control = (audio) => {
    let inner = e('.inner')
    let dot = e('.dot')
    let image = e('.image')
    let max = image.offsetWidth
    let moving = false
    let offset = 0

    dot.addEventListener('mousedown', (event) => {
        log('event', event.clientX, dot.offsetLeft, event.clientX - dot.offsetLeft)
        offset = event.clientX - dot.offsetLeft
        moving = true
    })

    document.addEventListener('mouseup', (event) => {
        moving = false
        changeTime(audio)
    })

    document.addEventListener('mousemove', (event) => {
        if (moving) {
            // 离浏览器左侧窗口当前距离减去父元素距离浏览器左侧窗口距离就是
            // dot 移动的距离
            let x = event.clientX - offset
            // dot 距离有一个范围, 即 0 < x < max
            if (x > max) {
                x = max
            }
            if (x < 0) {
                x = 0
            }
            let width = (x / max) * 100
            inner.style.width = String(width) + '%'
        }
    })
}
//拖动进度条
let duration = 0
const changeTime = (audio) => {
    let inner = e('.inner')
    let a = inner.style.width
    let num = a.replace("%", "")
    num = Number(num) / 100
    audio.addEventListener('canplay', function() {
        duration = audio.duration
    })
    // let duration = audio.duration
    log('duration is', duration)
    let b = Math.floor(duration * num)
    log('b is', b)
    audio.currentTime = b
}
//进度条自己动
const timeMove = (audio) => {
    setInterval(function () {
        let time = audio.currentTime
        let width = time / audio.duration * 100
        log(width)
        let inner = e('.inner')
        inner.style.width = String(width) + '%'
    }, 1000)
}