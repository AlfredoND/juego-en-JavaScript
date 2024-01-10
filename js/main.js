import { dimensiones } from './modules/dimensiones.js'
import { Rectangulo } from './modules/rectangulos.js'
import { buclePrincipal } from './modules/buclePrincipales.js'
import { teclado } from './modules/teclado.js'

const juego = document.getElementById('juego')

document.addEventListener('DOMContentLoaded', () => {
  main.iniciarJuego()
}, false)

const main = {
  iniciarJuego: () => {
    console.log('Game Init!')
    teclado.iniciar()
    dimensiones.iniciar()
    main.recargasTiles()
    buclePrincipal.iterar()
  },
  recargarJuego: () => {
    juego.innerHTML = ' '
    for (let y = 0; y < dimensiones.obtenerTilesVertical(); y++) {
      for (let x = 0; x < dimensiones.obtenerTilesHorizontal(); x++) {
        const rectangulo = new Rectangulo(x * dimensiones - ladoTiles, y * dimensiones.ladoTiles, dimensiones.ladoTiles, dimensiones.ladoTiles)
        rectangulo.insertarDOM()
      }
    }
  }
}
