let currentStep = 0;
const steps = document.querySelectorAll('.step');

function nextStep() {
    // Verifica se há uma pergunta selecionada
    const q1 = document.querySelector('input[name="q1"]:checked');
    const q2 = document.querySelector('input[name="q2"]:checked');

    if (currentStep === 0 && !q1) {
        alert("Por favor, responda a pergunta 1.");
        return;
    }

    if (currentStep === 1 && !q2) {
        alert("Por favor, responda a pergunta 2.");
        return;
    }

    // Esconde o passo atual
    steps[currentStep].classList.remove('active');
    
    // Se for a última pergunta, calcula o resultado
    if (currentStep === steps.length - 1) {
        calcularResultado();
    } else {
        // Avança para o próximo passo
        currentStep++;
        steps[currentStep].classList.add('active');
    }
}

function calcularResultado() {
    // Pega os valores das respostas
    const q1Value = parseInt(document.querySelector('input[name="q1"]:checked').value);
    const q2Value = parseInt(document.querySelector('input[name="q2"]:checked').value);

    // Calcula a soma
    const resultado = q1Value + q2Value;

    // Exibe o resultado
    document.getElementById('resultado').textContent = resultado;
    document.getElementById('result').style.display = 'block';
}
