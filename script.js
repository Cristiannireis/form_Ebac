document.getElementById("numberForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let campoA = parseFloat(document.getElementById("campoA").value);
    let campoB = parseFloat(document.getElementById("campoB").value);
    let message = document.getElementById("message");
    
    if (campoB > campoA) {
        message.textContent = "Formulário válido! O número B é maior que o número A.";
        message.className = "message success";
    } else {
        message.textContent = "Erro: O número B deve ser maior que o número A.";
        message.className = "message error";
    }
});
