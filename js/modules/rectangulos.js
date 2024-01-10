export class Rectangulo {
  constructor (x, y, ancho, alto) {
    this.x = x
    this.y = y
    this.ancho = ancho
    this.alto = alto
    this.id = `${x}r${y}`
    this.insertarDOM()
  }

  insertarDOM () {
    const div = document.createElement('div')
    div.innerHTML = `<div id="${this.id}"></div>`
    const html = document.getElementById('juego')
    const color = '#' + Math.floor(Math.random() * 16777215).toString(16)
    div.style.position = 'absolute'
    div.style.left = this.x + 'px'
    div.style.top = this.y + 'px'
    div.style.width = this.ancho + 'px'
    div.style.height = this.alto + 'px'
    div.style.backgroundColor = color

    html.append(div)
  }
}
