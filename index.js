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

// Slideshow

let sections = ['welcome', 'a', 'b', 'c', 'd']

class Slide {
  constructor(element) {
    this.element = element.id
    this.top = element.offsetTop
  }

  smoothScroll() {
    window.scroll({
      top: this.top,
      behavior: 'smooth'
    })
  }
}

class Slideshow {
  constructor(array, event, slides = [], activeSlide = 0, nextSlide = 1) {
    this.array = array
    this.event = event
    this.slides = slides
    this.activeSlide = activeSlide
    this.nextSlide = nextSlide
  }

  createSlideshow() {
    let slides = []
    for (let i = 0; i < this.array.length; i++) {
      let element = document.querySelector('#' + this.array[i])
      let newSlide = new Slide(element)
      slides.push(newSlide)
    }
    this.slides = slides
    this.addEvent()
  }

  scrollToNextSlide() {
    if (this.nextSlide === this.slides.length) {
      this.slides[0].smoothScroll()
      this.activeSlide = 0
      this.nextSlide = 1
    } else {
      this.slides[this.nextSlide].smoothScroll()
      this.activeSlide += 1
      this.nextSlide += 1
    }
  }

  addEvent() {
    window.addEventListener(this.event, this.scrollToNextSlide.bind(this))
  }
}

const mySlideShow = new Slideshow(sections, 'click')
mySlideShow.createSlideshow()
