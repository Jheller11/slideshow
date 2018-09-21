// Slideshow -------------------------------------------------------------------------

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
    this.addEvents()
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

  addEvents() {
    window.addEventListener(this.event, this.scrollToNextSlide.bind(this))
    window.addEventListener('scroll', () => {
      this.activeSlide = this.getActiveSlide()
      this.nextSlide = this.activeSlide + 1
    })
  }

  getActiveSlide() {
    let tops = this.slides.map(slide => {
      return slide.top
    })
    let scrollPosition = window.scrollY
    let arr = []
    tops.forEach((top, i) => {
      if (scrollPosition >= top - 1) {
        arr.push(i)
      }
    })
    return arr[arr.length - 1]
  }
}

const mySlideShow = new Slideshow(sections, 'click')
mySlideShow.createSlideshow()

// -------------------------------------------------------------------------------
