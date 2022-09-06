//这则表达式
// let str = '饥人谷5岁了'
// console.log(/\d/.test(str))  //字符串中含有数字吗

let reg = '/\d/g'
//字面量
let regNew = "new RegExp('\d{11}','g')"
//构造函数

let g = 'global : 全局搜索'
let i = 'ignore case : 忽略大小写'
let m = 'multiple lines : 多行搜索'
// regular expression 修饰符
let _test = '.test() : 判断字符串是否符合正则表达式的规则'
let str_reg = `
str.search(/ 搜索 /)
str.match(/ 匹配 /)
str.replace(/ 替换 /)
str.split(/ 分裂 /)`

//案例
//iPhone_number
//判断是否是手机号，规则：1开头长度11
// let iphone = /^(\+86)?1\d{10}$/
// iphone.test('18610047702')
// //验证是为了防止用户错误操作，不是越严格越好

//email
//包含一个@， @后面有个.
//281104630@qq.com
// let email = /^[^@\s]+@[^@\s]+\.[^@\s]+$/
// email.test('281104630@qq.com')
// //以什么开头和结尾 一定要加上

//user_name
//规则:合法用户名至少8位至多15位，包含大小写、数字、下划线至少两种
// function validUserName(rawInput){
//     if(!/^\w{8,15}/.test(rawInput)) return false
//     //验证位数

//     if(/(^[a-z]+$)|(^[A-Z]+$)|(^[0-9]+$)|(^_+$)/.test(rawInput)) return false

//     return true
// }
// console.log(validUserName('123123123d_A'))

console.log('str.replace(reg,function)')
let str = 'border-top-color'
// let word1 = str.replace(/-(\w)/g,function(){
//     console.log(arguments)
//     //arguments 返回的是参数的数组 [reg,$1,index,string]
//     return arguments[1].toUpperCase()
//     //把$1转换成大写
// })
// console.log(word1)

// let word2 = str.replace(/-(\w)/g,function(match,$1){
//     return '_' + $1.toUpperCase()
// })
// console.log(word2)

console.log('str.exec("string")')
// let reg1 = /\b\w+\b/g,temp    
// //等同于 let reg，let temp
// while(temp = reg1.exec('hello world,hi jirengu')) {
//   console.log(`${temp.index} : ${temp[0]}`)
// }

