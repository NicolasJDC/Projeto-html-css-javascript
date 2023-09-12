function toggleMode () {
  const html = document.documentElement

html.classList.toggle('light')
}

function abrirAlerta(){
  alert({
      title: "Ola",
      text: "Seja Bem vindo",
      icon: "info",
  })

}