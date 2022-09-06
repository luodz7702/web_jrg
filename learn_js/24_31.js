console.log('hello web')
console.log(99+100)
// let score = window.prompt('输入分数:')

console.log('if') 
/*
if (score >= 90) {
    alert('优秀')
} else if (score >= 70) {
    alert('良好')
} else if (score >= 60) {
    alert('及格')
} else {
    alert('不及格')
}
*/

console.log('switch')
/*
score = + score
switch (true) {
    case score >= 90:
        alert('优秀')
        break;
    case score >= 70:
        alert('良好')
        break;
    case score >= 60:
        alert('及格')
        break;
    default:
        alert('不及格');
}
*/

console.log('while 语句')
/*
let a = 10
while (a>0) {
    console.log(a)
    a--
}
*/

console.log('do - while')
/*
let i = 5
do {
    console.log(i)
    i--
} while(i>0)
console.log(i)
console.log(i)
*/

console.log('for 语句')
/*
for (let i = 10; i > 0; i--) {
    console.log(i)
}

for (let i = 0; i < 20; i = i + 2) {
    console.log(i)
}
*/
console.log('for-in语句')
/*
let arr = [2,6,3,67,2,3,44,66,34,345,234,654,999]
for (let i in arr) {
console.log(arr[i])
}
*/
console.log('for-of语句')
/*
let arr = [2,6,3,67,2,3,44,66,34,345,234,654,999]
for (let val of arr) {
console.log(val)
}
*/
console.log('关键字:break')
/*
for (let i = 1; i < 10; i++ ) {
    if (i%3 === 0) break
    console.log(i)
}
*/

console.log('关键字:continue')
// for (let i = 1; i < 10; i++ ) {
//     if (i%3 === 0) continue
//     console.log(i**2)
//     console.log(i*i)
// }

console.log('function')
// function sum(a,b) {
//     result = a+b
//     return result
// }
// let val1 = sum(4,8)
// console.log(val1)

// const sum = function(a,b){
//     console.log(arguments)
//     return a + b
// }
// let value123 = sum(34,77,23,123,123,12)
// console.log(value123)

console.log('arguments')
// let result = 0
// const sum = function() {
//     for (let i = 0; i < arguments.length; i++) {
//         result += arguments[i]
       
//     }
//     return result
// }
// console.log(sum(34,52,632,32,55,22,44))

// function printInfo(name,age) {
//     console.log(name)
//     console.log(age)
//     console.log(arguments)
//     console.log(arguments[0])
//     console.log(arguments.length)
//     console.log(arguments[1] === age)
//   }
// printInfo('刘亦菲',34)

console.log('return')
// function sum(a,b) {
//     return a+b
//   }
// console.log(sum(12,43))

// const sum1 = function() {
//     sum22 = 0
//     for (let i = 0; i < arguments.length; i++){
//         sum22 += arguments[i]
//     }
//     return sum22
// }  
// console.log(sum1(12,32,12,34,111,11111))
console.log('箭头函数')
// const add = a => b => a + b
// console.log(add(43)(66))

console.log('声明前置（hoisting）')
// a = 3
// console.log(a)
// var  a 

// function doSomething(){
//   console.log(b)
//   var b = 10
//   console.log(b)
// }
// doSomething()

// fn()
// function fn(){
//   console.log('hello bilibili.com')
// }

// fn2() //会报错，函数表达式不会前置
// const fn2 = function(){
//   console.log('hello baidu.com')
// }
console.log('函数作用域链')
// let a = 0
// function foo(){
//   bar()
//   var a = 1
//   function bar(){
//     console.log(a)
//   }
// }
// foo()

console.log('递归')
//阶乘
// function fact(n){
//     if(n===1) return 1
//     return n*fact(n-1)
// }
// console.log(fact(10))

//斐波那契（递归）
// function fib(n){
//     if(n===1 || n===2) return 1
//     return fib(n-1) + fib(n-2)
// }
// console.log(fib(7))
//斐波那契（传统平移）
// function fib1(n) {
//     let last1 = 1, last2 = 2,temp
//     for (let i = 3 ;i < n ; i++ ) {
//         temp = last1 + last2
//         last1 = last2 
//         last2 = temp
//     }
//     return last2
// }
// console.log(fib1(7))
//斐波那契（array_cache）
// 1 1 2 3 5 8 13 21
// function fib2(n) {
//     let cache = [1,1]
//     for(let i = 2; i < n; i++){
//         fib1 = cache[i-2]
//         fib2 = cache[i-1]
//         cache.push(fib1 + fib2)
//     }
//     return cache[n-1]//第n项对应的下标是n-1
// }
// console.log(fib2(7))

console.log('柯里化（currying）')
// function add(a) {
//     return function(b){
//       return a + b
//     }
//   }
//  console.log(add(3)(4)) 
  
console.log('回调')
// function callMe(name,callback){
//     callback(name)
//   }
//   callMe('刘亦菲',function(name) {
//     console.log('Hi' + name)
//   })

console.log('string')
// console.log(`hello\\
//             adfasdfadsf
//             adfasdfasdf21312
//             1231asd`)

console.log('string方法')
// let str = 'hello'
// console.log(str.length)     //string长度
// console.log(str[0])         //string切片
// console.log(str[str.length -1])    //string最后一个切片
// console.log(str.charAt(0))
// console.log(str.charCodeAt(0))

// let str2 = 'world'
// let str3 = str + " " + str2
// console.log(str3)
// let str4 = `${str} ${str2}`
// console.log(str4)
// let str5 = str.concat(str2)
// console.log(str5)

console.log('string截取 和 拼接')
// let str = '<li><a href="https://www.123.com/web_jrg/learn_css/modal_frame/modal_frame.html">Modal frame</a></li>'
// let start = str.indexOf('"')
// let end = str.lastIndexOf('"')
// let url = str.substring(start+1,end)
// console.log(start)
// console.log(end)
// console.log(url)

console.log('array')
// let arr = [3,4,'hello',true,8]
// console.log(arr.length)  //array长度
// console.log(arr[0])      //index取值
// console.log(arr[arr.length-1])  //array 最后一个value
// console.log(arr)
// arr.length = 0 
// console.log(arr)
console.log('栈，队列')
// let arr = [3,4,'hello',true,8]
// let val = arr.pop()
// console.log(val)   //8
// console.log(arr)   //[3,4,'hello',true]

// let arr = [3,4,'hello',true,8]
// let val = arr.pop()     //数组最后一位弹出并赋值给val(弹出)
// console.log(val)        //8
// console.log(arr)        //[3,4,'hello',true]

// arr.push(100)      //把100从数组尾部 推入数组arr(尾部添加)
// console.log(arr)   // [3，4，'hello'，true，100]

// arr.unshift(10)    //把元素插入arr[0]位置(头部插入)
// console.log(arr)   //[10,3，4，'hello'，true，100]

// arr.shift()        //头部删除
// console.log(arr)      //[3，4，'hello'，true，100]

console.log('添加，删除，替换')
// //从1开始删除2个元素
// let arr = [3,4,'hello',true,8]
// arr.splice(1,2)   //[4,'hello']
// console.log(arr)  //[3,true,8]

// //插入1个元素
// let arr1 = [3,4,'hello',true,8]
// arr1.splice(1,0,'world')
// console.log(arr1)  //[3,'world',4,'hello',true,8]

// //替换
// let arr2 = [3,4,'hello',true,8]
// arr2.splice(2,2,'world',false)  
// console.log(arr2)  //[3,4,'world',false,8]

console.log('array 合并')
// let arr = [4,5,6]
// let arr2 = arr.concat(7)  //concat方法不改变原数组(浅拷贝)
// console.log(arr2)         //[4,5,6,7]
// let arr3 = arr.concat([8,9])   
// console.log(arr3)         //[4,5,6,8,9]

console.log('array 转化 string')
// let str = arr.join('')       //数组转化为字符串
// console.log(str)          // '456'
// let str2 = arr.join('-')   
// console.log(str2)          //'4-5-6'

console.log('倒序')
// let months = ['March','Jan','Feb','Dec']
// months.reverse()
// console.log(months)

console.log('排序')
// let months = ['March','Jan','Feb','Dec']
// months.sort()
// console.log(months)  //['Dec','Feb','Jan','March']

// let arr1 = [1,30,4,21,100]
// arr1.sort()
// console.log(arr1)  //[1,100,21,30,4]

// arr1 = [1,30,4,21,100]
// arr1.sort((a,b) => a-b) //从小到大[1，4，21，30，100]
// console.log(arr1)
// arr1 = [1,30,4,21,100]
// arr1.sort((a,b) => b-a)  //从大到小[100，30，21，4，1]
// console.log(arr1)
// months= ['March','Jan','Feb','Dec']
// months.sort((a,b) => a>b? 1: -1)   //从小到大
// console.log(months)

console.log('Array.isArray()')
// let a = []
// let b = new Date()
// console.log(Array.isArray(a))    //true
// console.log(Array.isArray(b))    //false
// console.log(b)

console.log('forEach()')
// let arr = [4,2,1,9,0,5]
// arr.forEach(function(val){
//   console.log(val)
// })

// arr.forEach(function(val,index,array){
//     array[index] = val ** 2
//   })

//   //变成箭头函数更简洁
// arr.forEach(val => console.log(val**2))

console.log('every()')
// let arr = [4,-2,1,9,0,5]
// let isPositive = arr.every(val => val > 0)
// console.log(isPositive)

console.log('some()')
// let arr = [4,-2,1,9,0,5]
// arr.some(val => val > 0)  //数组里面有正数吗  true
// arr.some(val => val < 0)  //数组里面有负数吗  true

console.log('filter()')
// let arr = [4,-2,-1,9,0,5]
// let arr1 = arr.filter(val => val > 0)  //过滤出正数
// console.log(arr1)  // [4,9,5]

// let arr2 = arr.filter(val => val < 0)  //过滤出负数
// console.log(arr2)  // [-2,-1]

// console.log(arr)  //[4,-2,-1,9,0,5] 原数组不变

console.log('map()')
// let arr = [1,4,3,9]
// let arr1 = arr.map(v => v**2)
// console.log(arr1)  //[1,16,9,81]

console.log('reduce()')
// let arr = [1,4,3,9]
// let result = arr.reduce((v1,v2) => v1 + v2)
// console.log(result)  //17

// let result2 = arr.reduce((res,v) => res +v**2,0)
// console.log(result2)

// function sum(){
//     result = 0
//     for (let i = 0; i < arguments.length; i++){
//         result += arguments[i]
//     }
//     return result
// }

// console.log(sum(1,2,3,4,5,6,7,8,9))

console.log('(...args)')
// const sum = (...args)=> args.reduce((res,v) => res + v ,0)
// console.log(sum(1,2,3,4,5,6,7,8,9))
// console.log(sum(11,22,33,44,55,66))

//实现一个函数，参数为array，返回数组中的正数的平方和
// const calc = arr => arr.filter(v => v > 0).reduce((res,v) => res + v**2, 0 )
// console.log(calc([1,2,3,4,5,6,7,8,9,-100,-32]))

// 实现filter函数
// function filter(arr,fn){
//     let res = []
//     for(let v of arr){
//         if(fn(v)) res.push(v)
//         //回调函数判断为真，推送到res
//     }
//     return res
// }
// console.log(filter([3,4,-3,-2,-7,9,6],v=>(v>0)))

//实现map函数
// function map(arr,fn) {
//     let res = []
//     for(let v of arr){
//         res.push(fn(v))
//     }
//     return res
// }
// console.log(map([1,2,3,4,5,6,7],v => v**2-1))

//实现reduce函数
// function reduce(arr,fn,initValue){
//     let tempArr = (initValue === undefined ? [] : [initValue]).concat(arr)
//     while(tempArr.length > 1){
//         tempArr.splice(0,2,fn(tempArr[0],tempArr[1]))
//     }
//     return tempArr[0]    
// }
// console.log(reduce([1,2,3,4,5,6,7],(v1,v2) => v1 + v2**2,100))


console.log('Array.prototype')
// xx.函数()  函数内的this 就是xx
// Array.prototype.sum = function() {
//     return this.filter(v => typeof v === 'number').reduce((v1,v2) => v1 +v2)
//   }
  
// [3,'hello',2,5].sum()  // 10

// 手动实现 reduce原型
// Array.prototype.reduce11 = function(fn,initValue) {
//     let tempArr = (initValue === undefined ? [] : [initValue]).concat(this)
//     while(tempArr.length > 1){
//         tempArr.splice(0,2,fn(tempArr[0],tempArr[1]))
//     }
//     return tempArr[0]    
// }  

// function sum(){
//     console.log(arguments.length)
//     console.log(arguments[0])
//     return Array.from(arguments).reduce((v1,v2)=> v1+v2)
     //报错，arguments没有reduce方法，因为它不是数组
     //Array.from()  ||   [...arguments]  把非数组对象转换成数组
//   }

console.log('Date')
// let d = new Date()
// console.log(d)

//去年的今天是周几
// let nowDate = Date.now()
// let lastYear = nowDate - 365*24*3600*1000
// console.log(typeof lastYear)
// console.log(typeof nowDate)
// let lastYearDate = new Date(lastYear)
// console.log(typeof(lastYearDate))
// //把去年的时间毫秒数转化为Date对象
// console.log(`去年的今天是周${lastYearDate.getDay()}`)

//距离元旦还剩x天x时x分x秒
// function getCountDown(){
//     let targetTime = new Date('2023-01-01 00:00:00').getTime()
//     let nowTime = Date.now()
//     let timeBetween = Math.abs(targetTime-nowTime)
//     // 间隔的毫秒数
//     let days = Math.floor(timeBetween/(1000*3600*24))
//     let left = timeBetween%(1000*3600*24)
//     // 剩下的小时
//     let hours = Math.floor(left/(1000*60*60))
//     left = left%(1000*60*60)
//     // 剩下的分钟 
//     let minutes = Math.floor(left/(1000*60))
//     left = left%(1000*60)
//     // 剩下的秒
//     let seconds = Math.floor(left/1000)
//     return {days,hours,minutes,seconds}
//   }
//   let obj = getCountDown()
//   console.log(obj)
//   console.log(`距离元旦还有${obj.days}天，${obj.hours}小时，${obj.minutes}分钟，${obj.seconds}秒`)
  
// 格式化旧日期
// function formatTime(dateStr) {
//     let betweenTime = parseInt((Date.now() - new Date(dateStr).getTime())/1000)
//     switch (true) {
//       case betweenTime < 0:
//         return `futrue...`
//       case betweenTime < 60:
//         return `刚刚`
//       case betweenTime < 3600:
//         return `${parseInt(betweenTime/60)}分钟前`
//       case betweenTime < 3600*24:
//         return `${parseInt(betweenTime/3600)}小时前`
//       default:
//         return `${parseInt(betweenTime/(3600*24))}天前`
//     }
//   }
//   console.log(formatTime('2022-08-12 19:46:50'))

//写一个函数，返回长度为n的随机字符串，包含a-z，0-9
// function randStr(len) {
//     let str = ''
//     let letter = 'abcdefghijklmnopqrstuvwxyz0123456789'
//     let letterLen = letter.length
//     for (let i = 0;i < len;i++) {
//       str += letter[Math.floor(letter.length*Math.random())]
//     }
//     return str
// }

//  浅拷贝 shallowCopy
// array
// const shallowCopy = (arr => arr.map( v=>v ))
// let arr1 = [3,5,7,9]
// let arr2 = shallowCopy(arr1)

//object
// function shallowCopy(obj) {
//     let result = Array.isArray(obj) ? [] : {}
//     for (let key in obj){
//         result[key] = obj[key]
//     }
//     return result
// }
// let obj1 = {a:1,b:2,c:332,d:21}
// let obj2 = shallowCopy(obj1)

// let arr1 = [2,3,4,5,6,7]
// let arr2 = shallowCopy(arr1)



  //深拷贝 deepCopy
// function deepCopy(obj) {
//     let result = Array.isArray(obj) ? [] : {}
//     for (let key in obj) {
//         if (typeof obj[key] === 'object' && obj[key] !== null) {
//             result[key] = deepCopy(obj[key])
//         }else {result[key] = obj[key]}
//     }
//     return result
// }
// let arr3 = [1,2,3,4,5,6,[43,54,67,98],4,6]
// let arr4 = deepCopy(arr3)












