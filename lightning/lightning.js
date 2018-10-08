// const settings = {
//   boltFrequency: 5000,
//   boltNumber: 1,
//   flashFrequency: 2000
// }

// const bolt = index => {
//   let div = document.querySelector('.bolt')
//   div.innerHTML += '<svg width="900" height="700"></svg>'
//   let svg = document.querySelectorAll('svg')
//   svg[index].innerHTML = generatePath()
// }

// const random = (min, range) => {
//   return Math.floor(Math.random() * range) + min
// }

// const generatePath = () => {
//   let pathString = ''
//   let points = []
//   // random starting point
//   points.push('M' + random(15, 700) + ' ' + random(10, 100))
//   //   random points
//   for (let i = 0; i < 15; i++) {
//     points.push('l' + random(-40, 80) + ' ' + random(40, 20))
//   }
//   pathString += points.join('')
//   let string = `<path stroke="yellow" fill="transparent" d="${pathString}" />`
//   return string
// }

// const initiate = () => {
//   for (let i = 0; i < settings.boltNumber; i++) {
//     setInterval(() => bolt(i), settings.boltFrequency)
//   }
// }

// initiate()
