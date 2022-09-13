function Mammal(name) {
    this.name = name
    this.head = '头'
    this.neck = '颈'
    this.body = '躯干'
  }
  
  Mammal.prototype.birth = function() {
    console.log(this.name + '生了个宝宝')
  }
  
  let animal = new Mammal('大汪')
  animal.birth()

// function Human(name) {
//     Mammal.call(this,name) // 获取父类属性
//     this.clothes = '衣服'
// }

// Human.prototype.speak = function() {
//     console.log(this.name + '会说话')
// }

// let p = new Human('小明')
// console.log(p.head)
// console.log(p.clothes)
// p.speak()
function Human(name) {
    Mammal.call(this,name)
    this.clothes = '衣服'
  }
  
  Human.prototype = Object.create(Mammal.prototype)
  // 把 Mammal 的原型赋值给 Human 的原型
  Human.prototype.constructor = Human
  
  Human.prototype.speak = function() {
    console.log(this.name + '会说话')
  }
  
  let p = new Human('小明')
//   p.birth()
//   p.speak()