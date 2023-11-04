function Parent(name) {
  this.name = name
}
Parent.prototype.eat = function () {
  console.log(this.name + ' is eating')
}

function Child(name, age) {
  Parent.call(this, name)
  this.age = age
}
Child.prototype = Object.create(Parent.prototype)
Child.prototype.constructor = Child
Child.prototype.study = function () {
  console.log(this.name + ' is studying')
}

//
let child = new Child('sxc', 21)
console.log(child.name)
child.eat()
child.study()
