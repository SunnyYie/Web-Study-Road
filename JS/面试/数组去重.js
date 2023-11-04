const newArr = [...new Set(arr)]

const newArr2 = Array.from(new Set(arr))

function resetArr(arr) {
  let res = []
  arr.forEach((item) => {
    if (res.indexOf(item) === -1) {
      res.push(item)
    }
  })
  return res
}
const arr = [1, 1, 2, 3, 3]
console.log(resetArr(arr))
