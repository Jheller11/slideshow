const svg = document.querySelector('svg')

// calculate a set of points along the circles
const calcPoint = (angle, radius) => {
  let x = radius * Math.sin(angle)
  let y = radius * Math.cos(angle)
  return x.toString() + ' ' + y.toString()
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

// generate a line

const line = () => {
  let path = document.createElementNS('http://www.w3.org/2000/svg', 'path')
  path.setAttribute('stroke-width', '1')
  path.setAttribute('stroke', 'orange')
  path.setAttribute('fill', 'transparent')
  path.setAttribute(
    'd',
    `M250 250l${innerCirclePoints[random(200)]}l${
      outerCirclePoints[random(200)]
    }`
  )
  console.log(path)
  svg.appendChild(path)
}

line()
line()
line()

// add new lines to page
setInterval(() => line(), 2500)
// remove lines from page
