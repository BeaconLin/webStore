class Animate {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    bark() {
        console.log('汪汪汪！')
    }
}
class Dog extends Animate {
    constructor(name, age, type) {
        super(name, age)
        this.type = type
    }
    sing() {
        super.bark()
    }
}

var mini = new Dog('mini', 3, 'cupDog')
mini.bark()
mini.sing()