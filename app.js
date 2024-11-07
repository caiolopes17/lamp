/**
 * Simples simulador de uma lâmpada
 * @author Caio Lopes
 */

function quebrar() {
    document.getElementById('lamp').src="img/broken.jpg"
    // reproduzir u arquivo de áudio no JS
    // Passo 1: copiar o arquivo de aúdio para o projeto
    // Passo 2: Usar a classe audio(biblioteca interna do JS)
    let som = new Audio()
    som.src = "sound/glassbreaking.wav"
    som.play()
}

function onoff(){
   document.getElementById('interruptor').src="img/swon.png"
}