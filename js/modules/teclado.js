export const teclado = {
  teclas: [],
  iniciar: function () {
    document.onkeydown = teclado.guardarTecla
  },
  guardarTecla: function (event) {
    teclado.teclas.push(event.key)
    console.log(event.key)
  },
  teclaPulsada: function (codigoTecla) {
    return (teclado.teclas.indexOf(codigoTecla) !== -1)
  },
  reiniciar: function () {
    teclado.teclas = []
  }

}
