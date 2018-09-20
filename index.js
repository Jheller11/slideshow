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

// star generator
const createStars = () => {
  for (let i = 200; i > 0; i--) {
    let star = new Star(
      [random(10, 690), random(10, 990)],
      random(2, 2),
      `rgb(${random(230, 25)}, 255, ${random(230, 25)})`,
      animate()
    )
    let div = document.createElement('div')
    div.setAttribute('class', 'star')
    div.setAttribute('style', star.style())
    starContainer.appendChild(div)
  }
}

createStars()
