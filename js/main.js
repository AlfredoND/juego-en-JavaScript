import { dimensiones } from './dimensiones.js'
import { Rectangulo } from './rectangulos.js'
import { mainLoop } from './mainLoop.js'

const juego = document.getElementById('juego')
document.addEventListener('DOMContentLoaded', () => {
  main.iniciarJuego()
}, false)

const main = {
  iniciarJuego: function () {
    console.log('Game Init!')
    dimensiones.iniciar()
    main.recargasTiles()
    mainLoop.iterar()
  },
  recargasTiles: function () {
    juego.innerHTML = ''
    for (let y = 0; y < dimensiones.obtenerTilesVertical(); y++) {
      for (let x = 0; x < dimensiones.obtenerTilesHorizontal(); x++) {
        const rectangulo = new Rectangulo(x * dimensiones.ladoTiles, y * dimensiones.ladoTiles, dimensiones.ladoTiles, dimensiones.ladoTiles)
        rectangulo.insertarDOM()
      }
    }
  }
}
