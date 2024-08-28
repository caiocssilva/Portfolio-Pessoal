// Inicialize o EmailJS
emailjs.init('h_O3-_IMMdSCPxmXF');  // chave pública aqui

// Enviar o formulário
document.querySelector('.formulario-contato').addEventListener('submit', function(event) {
    event.preventDefault();  // Evita o envio padrão do formulário

    emailjs.sendForm('service_relotdm', 'template_iauv0mm', this)
        .then(function(response) {
            console.log('Sucesso:', response);
            alert('Mensagem enviada com sucesso!');
        }, function(error) {
            console.log('Erro:', error);
            alert('Falha ao enviar a mensagem.');
        });
});
