const svg = document.querySelector('svg')

// calculate a set of points along the circles
const calcPoint = (angle, radius) => {
  let x = radius * Math.sin(angle)
  let y = radius * Math.cos(angle)
  return [x, y]
}
const outerCirclePoints = []
for (let i = 0; i < 200; i++) {
  outerCirclePoints.push(calcPoint(i, 200))
}
const innerCirclePoints = []
for (let i = 0; i < 200; i++) {
  innerCirclePoints.push(calcPoint(i, 20))
}

// random number to select an item from circlePoints array

const random = max => {
  return Math.floor(Math.random() * max)
}

// return a random point from array as a string
const convertToString = array => {
  let string = ''
  string += array[random(200)].join(' ')
  return string
}

// Line class
class Line {
  constructor(color, width) {
    this.color = color
    this.width = width
    this.element = null
  }

  generate() {
    let path = document.createElementNS('http://www.w3.org/2000/svg', 'path')
    path.setAttribute('stroke-width', this.width)
    path.setAttribute('stroke', this.color)
    path.setAttribute('fill', 'transparent')
    path.setAttribute('id', 'path')
    path.setAttribute(
      'd',
      `M250 250l${convertToString(innerCirclePoints)}L250 250l${convertToString(
        outerCirclePoints
      )}`
    )
    this.element = path
  }

  append() {
    svg.appendChild(this.element)
  }

  changeColor() {
    let path = document.querySelector('#path')
    path.setAttribute('stroke', 'purple')
  }
}

const newLine = new Line('red', 1)

newLine.generate()
newLine.append()
setInterval(() => newLine.changeColor(), 1500)
