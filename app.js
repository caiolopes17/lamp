/**
 * Simples simulador de uma lâmpada
 * @author Caio Lopes
 */

function quebrar() {
    document.getElementById('lamp').src="img/broken.jpg"
    // reproduzir u arquivo de áudio no JS
    // Passo 1: copiar o arquivo de aúdio para o projeto
    // Passo 2: Usar a classe audio(biblioteca interna do JS)
    let som = new audio()
    som.src = "sound/glassbeking.wav"
    som.play()
}