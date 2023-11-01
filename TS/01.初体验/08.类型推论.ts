let age1 = 18
let age2 = '18'

function add1(num1: number, num2: number) {
  return num1 + num2
}
add1(age1, age1)

function add3(num1: string, num2: number) {
  return num1 + num2
}
add3(age2, age1)
