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

  render() {
    let string = `top: ${this.position[0]}px; left: ${
      this.position[1]
    }px; background-color: ${this.color}`
    return string
  }
}

const star1 = new Star([50, 50], 10, '#FFFFFF', false)

let div = document.createElement('div')
div.setAttribute('class', 'star')
div.setAttribute('style', star1.render())
starContainer.appendChild(div)

console.log(div)

console.log(star1.render())
