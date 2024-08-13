function verificarsenha(senha, confirmarsenha, cpf) {
    /*if (age < 18) return false; */
    if (senha !== confirmarsenha) return false;
    if (!confirmarsenha(senha)) return false;
    /*if (!validateCPF(cpf)) return false; 
    return true; */
}

    // Função para validar a senha
    function validarsenha(senha) {
        const hasNumber = /\d/;
        const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/;
        return hasNumber.test(senha) && hasSpecialChar.test(senha);
    }


    function senhasiguais(senha1, senha2) {
        return senha1 === senha2;
    }
    const senha1 = 'senha123';
    const senha2 = 'senha123';
    
    console.log(senhasiguais(senha1, senha2) ? 'As senhas são iguais.' : 'As senhas são diferentes.');
    
    function senhacomnumero(senha) {
        const hasNumber = /\d/; // Verifica se tem número na senha
        return hasNumber.test(senha);
    }
    
    const senha3 = 'senha123';
    
    console.log(senhacomnumero(senha3) ? 'A senha contém um número.' : 'A senha não contém um número.');
    
    
    function senhacomcaractereespecial(senha4) {
        const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/; // Verifica se há pelo menos um caractere especial na senha
        return hasSpecialChar.test(senha4);
    }
    
    // Exemplo de uso:
    const senha5 = 'senha!@#';
    
    console.log(senhacomcaractereespecial(senha5) ? 'A senha contém um caractere especial.' : 'A senha não contém um caractere especial.');
    

module.exports = {verificarsenha, validarsenha, senhasiguais, senhacomnumero, senhacomcaractereespecial}