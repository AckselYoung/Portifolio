document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Mensagem enviada! Obrigado por entrar em contato.');
    this.reset(); // Limpa o formulário após o envio
});