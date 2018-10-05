const container = document.querySelector('.container')

const bolt = index => {
  let div = document.querySelector('.bolt')
  div.innerHTML += '<svg width="900" height="700"></svg>'
  let svg = document.querySelectorAll('svg')
  svg[index].innerHTML = generatePath()
}

const random = (min, range) => {
  return Math.floor(Math.random() * range) + min
}

const generatePath = () => {
  let pathString = ''
  let points = []
  points.push('M' + random(15, 700) + ' ' + random(10, 100))
  for (let i = 0; i < 20; i++) {
    points.push('l' + random(-40, 80) + ' ' + random(20, 20))
  }
  pathString += points.join('')
  let string = `<path stroke="yellow" fill="transparent" d="${pathString}" />`
  return string
}

bolt(0)
bolt(1)
