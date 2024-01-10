export const dimensiones = {
  ancho: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
  alto: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight,
  ladoTiles: 100,
  escala: 1,
  iniciar: function () {
    window.addEventListener('resize', (event) => {
      dimensiones.ancho = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
      dimensiones.alto = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
      console.log('ANCHO: ' + dimensiones.ancho + ', ALTo:' + dimensiones.alto)
    })
  },
  obtenerTilesHorizontal: function () {
    const ladoFinal = dimensiones.ladoTiles * dimensiones.escala
    return Math.ceil((dimensiones.ancho - ladoFinal) / dimensiones.ladoTiles)
  },
  obtenerTilesVertical: function () {
    const ladoFinal = dimensiones.ladoTiles * dimensiones.escala
    return Math.ceil((dimensiones.alto - ladoFinal) / dimensiones.ladoTiles)
  },
  obtenerTotalTiles: function () {
    return dimensiones.obtenerTilesHorizontal() * dimensiones.obtenerTilesVertical()
  }
}
