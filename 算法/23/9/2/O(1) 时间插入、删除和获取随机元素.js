var RandomizedSet = function () {
  this.set = []
}

RandomizedSet.prototype.insert = function (val) {
  if (this.set.indexOf(val) != -1) {
    return false
  } else {
    this.set.push(val)
  }
  return true
}

RandomizedSet.prototype.remove = function (val) {
  let index = this.set.indexOf(val)
  if (index != -1) {
    this.set.splice(index, 1)
  } else {
    return false
  }
  return true
}

RandomizedSet.prototype.getRandom = function () {
  let random = Math.floor(Math.random() * this.set.length)
  return this.set[random]
}

var obj = new RandomizedSet()
var param_1 = obj.insert(1)
var param_2 = obj.remove(2)
var param_3 = obj.insert(2)
var param_4 = obj.getRandom()
var param_5 = obj.remove(1)
var param_6 = obj.getRandom()

console.log(param_1, param_2, param_3, param_4, param_5, param_6)
