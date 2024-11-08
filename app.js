/**
 * Simples simulador de uma lâmpada
 * @author Caio Lopes
 */

//variaveis de apoio a lógica
let chave = false //o interruptor inicia desligado (Chave é o mesmo interruptor)
let lampada = true // a lâmpada não esta quebrada

function quebrar() {
    if (lampada === true) {
        document.getElementById('lamp').src="img/broken.jpg"
        // reproduzir u arquivo de áudio no JS
        // Passo 1: copiar o arquivo de aúdio para o projeto
        // Passo 2: Usar a classe audio(biblioteca interna do JS)
        let som = new Audio()
        som.src = "sound/glassbreaking.wav"
        som.play()
        // apoio a lógica para o JS identificar a lâmpada quebrada
        lampada = false
    }
}
    
    function onoff(){
      if (chave === false && lampada === true ) {
        // Se a chave estiver desligada, acender a lâmpada
        document.getElementById('interruptor').src="img/swon.png"
        chave = true //O JS agora sabe que a chave está ligada
        document.getElementById('lamp').src = "img/on.jpg"
    
      } else if (lampada === true) {
        document.getElementById('interruptor').src="img/swoff.png"
        chave = false
        // Se a lâmpada estiver acessa, apagar a lâmpada
        document.getElementById('lamp').src="img/off.jpg"
      }
    }