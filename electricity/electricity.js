let circle = document.querySelector('circle')
let svg = document.querySelector('svg')

// calculate a set of points along the circles
const calcPoint = (angle, radius) => {
  let x = radius * Math.sin(angle)
  let y = radius * Math.cos(angle)
  return [x, y]
}
const outerCirclePoints = []
for (let i = 0; i < 100; i++) {
  outerCirclePoints.push(calcPoint(i, 200))
}
const innerCirclePoints = []
for (let i = 0; i < 100; i++) {
  innerCirclePoints.push(calcPoint(i, 20))
}

// random number to select an item from circlePoints array

const random = max => {
  return Math.floor(Math.random() * max)
}
