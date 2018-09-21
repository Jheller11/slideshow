let sections = ['a', 'b', 'c', 'd', 'e', 'f']
let slides = []
let activeSlide = 0
let nextSlide = activeSlide + 1

class Slide {
  constructor(element) {
    this.element = element
    this.top = this.element.offsetTop
  }

  smoothScroll() {
    window.scroll({
      top: this.top,
      behavior: 'smooth'
    })
  }

  animate() {}
}

for (let i = 0; i < sections.length; i++) {
  let element = document.querySelector(`#${sections[i]}`)
  var newSlide = new Slide(element)
  slides.push(newSlide)
}

var scrollToNextSlide = e => {
  if (nextSlide === slides.length - 1) {
    nextSlide = 0
    slides[nextSlide].smoothScroll()
    activeSlide = 0
    nextSlide = 1
  } else {
    slides[nextSlide].smoothScroll()
    activeSlide += 1
    nextSlide += 1
  }
}

window.addEventListener('click', scrollToNextSlide)
