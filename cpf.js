function validateCPF(cpf) {
    cpf = cpf.replace(/\D/g, ''); // Remove caracteres não numéricos

    if (cpf.length !== 11) return false; // Verifica o comprimento

    // Valida se todos os dígitos são iguais
    if (/^(\d)\1+$/.test(cpf)) return false;

    // Calcula os dígitos verificadores
    const calcularDigito = (str, peso) => {
        let soma = 0;
        for (let i = 0; i < str.length; i++) {
            soma += parseInt(str[i]) * peso[i];
        }
        const resto = soma % 11;
        return resto < 2 ? 0 : 11 - resto;
    };

    const pesos1 = [10, 9, 8, 7, 6, 5, 4, 3, 2];
    const pesos2 = [11, 10, 9, 8, 7, 6, 5, 4, 3, 2];

    const digito1 = calcularDigito(cpf.substring(0, 9), pesos1);
    const digito2 = calcularDigito(cpf.substring(0, 9) + digito1, pesos2);

    return cpf.endsWith(digito1 + '' + digito2);
}

module.exports = { validateCPF };
