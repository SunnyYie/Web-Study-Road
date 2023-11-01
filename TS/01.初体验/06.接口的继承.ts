interface Point2D {
  x: number
  y: number
}
interface Point3D extends Point2D {
  z: number
}

let p3: Point3D = {
  x: 1,
  y: 1,
  z: 0,
}
