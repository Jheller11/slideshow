// background div

const starContainer = document.querySelector('.star-container')

// define star class
class Star {
  constructor(position, size, color, blinking) {
    this.position = position
    this.size = size
    this.color = color
    this.blinking = blinking
  }

  //   generate string for inline style when element added
  style() {
    let string = `top: ${this.position[0]}px; left: ${
      this.position[1]
    }px; background-color: ${this.color}; width: ${this.size}px; height: ${
      this.size
    }px; ${
      this.blinking ? 'animation: blink 2s infinite ease-in-out' : ''
    }; animation-delay: ${random(0, 4)}s;`
    return string
  }
}

// random num generator for star properties
const random = (min, max) => {
  return Math.floor(Math.random() * max) + min
}

// animate?
const animate = () => {
  let blinking = Math.random() >= 0.5
  return blinking
}

// color?
const color = () => {
  let color = Math.random()
  if (color >= 0.33) {
    return '0, 0%, 100%'
  } else {
    return color >= 0.165 ? '0, 59%, 70%' : '230, 59%, 70%'
  }
}

// star generator
const createStars = amount => {
  for (let i = amount; i > 0; i--) {
    let star = new Star(
      [random(10, 690), random(10, screen.width - 150)],
      random(2, 2),
      `hsl( ${color()})`,
      animate()
    )
    let div = document.createElement('div')
    div.setAttribute('class', 'star')
    div.setAttribute('style', star.style())
    starContainer.appendChild(div)
  }
}

// shooting star generator

const shootingStar = () => {
  let shooter = new Star(
    [random(100, -200), random(100, -200)],
    random(2, 2),
    `hsl( ${color()})`
  )
  let div = document.createElement('div')
  div.setAttribute('class', 'shooting-star')
  div.setAttribute('style', shooter.style())
  starContainer.appendChild(div)
}

// start on page load

createStars(100)
