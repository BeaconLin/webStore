// //ES6 原型继承
// function Animate() {
//     this.name = 'odg'
//     this.age = 3
//     this.bark = function bark() {
//         console.log('汪汪汪')
//     }
// }

// function Dog() {
//     Animate.call(this)
//     this.style = 'cute'
// }
// //
// Dog.prototype = Object.create(Animate.prototype);
// //
// Dog.prototype.constructor = Dog
// var dog = new Dog()
// console.log(dog)

// //扩展内置对象
// Dog.prototype.type = 'haski'
// var newDog = new Dog()
// console.log(newDog);
// //判断前者是否为后者的实例
// console.log(newDog instanceof Dog)


function Animal() {
    var legs
    this.legs = legs
    var that = this
    this.legs = function() {
        return that.legs
    }
}

function Cat() {
    this.legs = 4
    Animal.call(this)
}

function Human() {
    this.legs = 2
    Animal.call(this)
}
Cat.prototype = Object.create(Animal.prototype)
Cat.prototype.constructor = Cat
Human.prototype = Object.create(Animal.prototype)
Human.prototype.constructor = Human
var cat = new Cat()
var human = new Human()
console.log(cat.legs === human.legs)
console.log(cat.legs)
console.log(human.legs())