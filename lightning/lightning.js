const container = document.querySelector('.container')

const bolt = () => {
  let div = document.createElement('div')
  div.setAttribute('class', 'bolt')
  div.innerHTML = '<svg width="900" height="500"></svg>'
  container.appendChild(div)
  let svg = document.querySelector('svg')
  svg.innerHTML = generatePath()
}

const random = (min, range) => {
  return Math.floor(Math.random() * range) + min
}

const generatePath = () => {
  let pathString = ''

  let points = []
  points.push('M' + random(15, 700) + ' ' + random(10, 100))
  for (let i = 0; i < 15; i++) {
    points.push('l' + random(-40, 80) + ' ' + random(20, 20))
  }
  pathString += points.join('')

  let string = `<path stroke="yellow" fill="transparent" d="${pathString}" />`
  console.log(points)
  return string
}

bolt()
bolt()
