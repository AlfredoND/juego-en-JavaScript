const dimensiones = {
  ancho: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
  alto: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight,

  iniciar: function () {
    window.addEventListener('resize', (event) => {
      dimensiones.ancho = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
      dimensiones.alto = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
      console.log('ANCHO: ' + dimensiones.ancho + ', ALTo:' + dimensiones.alto)
    })
  }
}

console.log(dimensiones)
