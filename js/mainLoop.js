export const mainLoop = {
  idEjecucion: null,
  ultimoRegistro: 0,
  aps: 0,
  fps: 0,
  iterar: function (registroTemporal) {
    mainLoop.idEjecucion = window.requestAnimationFrame(mainLoop.iterar)
    mainLoop.actualizar(registroTemporal)
    mainLoop.dibujar(registroTemporal)
    if (registroTemporal - mainLoop.ultimoRegistro > 999) {
      mainLoop.ultimoRegistro = registroTemporal
      console.log('APS: ' + mainLoop.aps + ', FPS: ' + mainLoop.fps)
      mainLoop.aps = 0
      mainLoop.fps = 0
    }
  },
  detener: function () { },
  actualizar: function (registroTemporal) {
    mainLoop.aps++
  },
  dibujar: function (registroTemporal) {
    mainLoop.fps++
  }
}
