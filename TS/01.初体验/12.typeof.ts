let p = { x: 1, y: 2 }
// function formatPoint(point:{x:number,y:number}) {}
// 根据已有变量的值，获取该值的类型，简化类型书写
function formatPoint(point: typeof p) {
  console.log(point)
}
formatPoint(p)

let num: typeof p.x = 10
