function calculateTax() {
    const income = parseFloat(document.getElementById('income').value);
    const resultElement = document.getElementById('result');
    
    if (isNaN(income) || income <= 0) {
        resultElement.innerHTML = "Por favor, insira um valor válido de rendimento anual.";
        return;
    }

    let tax = 0;

    // Cálculo das faixas de imposto de renda para pessoa física
    if (income <= 22847.76) {
        tax = 0; // Isento
    } else if (income <= 33919.80) {
        tax = (income - 22847.76) * 0.075;
    } else if (income <= 45012.60) {
        tax = (income - 33919.80) * 0.15 + 828.29;
    } else if (income <= 55976.16) {
        tax = (income - 45012.60) * 0.225 + 1484.18;
    } else {
        tax = (income - 55976.16) * 0.275 + 2215.51;
    }

    resultElement.innerHTML = `O imposto a ser pago é: R$ ${tax.toFixed(2)}`;
}
