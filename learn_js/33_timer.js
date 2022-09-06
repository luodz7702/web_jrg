console.log('定时器')

// console.log('setTimeout(),延时')
// console.log('1')
// let timer2 = setTimeout(()=> {
//     console.log('hello world')
// },2000)
// console.log('2')

console.log('setInterval(),间隔')

// let timer3 = setInterval(() => {
//     console.log('Hello world 26')
//   },1000)
// clearInterval(timer3)

console.log('小项目：电子时钟（计时）')
//获取时间
function showTime(){
    document.querySelector('.clock').innerText = new Date().toString().match(/\d{2}:\d{2}:\d{2}/)[0]
}
let btnStart = document.querySelector('#start')
let btnPause = document.querySelector('#pause')
let timer = null
// 两个按钮 绑定事件
btnStart.onclick= function() {
    timer = setInterval(() => {
        showTime()
    },1000)
}
btnPause.onclick = function(){
    clearInterval(timer)
}




