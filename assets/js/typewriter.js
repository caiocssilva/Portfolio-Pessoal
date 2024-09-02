// script.js
function typeWriter() {
    const element = document.getElementById('nome');
    const text = "Caio César";
    const speed = 100; // Velocidade da digitação (em milissegundos)
    let index = 0;

    function write() {
        if (index < text.length) {
            element.innerHTML += text.charAt(index);
            index++;
            setTimeout(write, speed);
        }
    }

    write(); // Inicia o efeito de digitação
}