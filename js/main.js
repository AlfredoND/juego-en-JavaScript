/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
document.addEventListener('DOMContentLoaded', () => {
  main.iniciarJuego()
}, false)

const main = {
  iniciarJuego: function () {
    console.log('Game Init!')
    dimensiones.iniciar()
    const r = new Rectangulo(0, 0, 200, 100)
    const r2 = new Rectangulo(100, 0, 200, 100)
    mainLoop.iterar()
  }
}
