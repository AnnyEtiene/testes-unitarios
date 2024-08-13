
    function formatCPF(cpf) {
        return cpf
            .replace(/\D/g, '') // Remove caracteres não numéricos
            .replace(/^(\d{3})(\d)/, '$1.$2') // Adiciona ponto
            .replace(/\.(\d{3})(\d)/, '.$1.$2') // Adiciona ponto
            .replace(/\.(\d{3})(\d{1,2})$/, '.$1-$2'); // Adiciona hífen
    }

    function validateCPF(cpf) {
        cpf = cpf.replace(/\D/g, ''); // Remove caracteres não numéricos
        if (cpf.length !== 11 || /^(\d)\1+$/.test(cpf)) return false; // Verifica o comprimento e se todos os dígitos são iguais

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

    // Função para validar a senha
    function validarsenha(senha) {
        const hasNumber = /\d/;
        const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/;
        return hasNumber.test(senha) && hasSpecialChar.test(password);
    }

    // Evento de submissão do formulário
    document.getElementById('loginForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Impede o envio padrão do formulário
        
        const username = document.getElementById('usuario').value;
        const password = document.getElementById('senha').value;
        const confirmPassword = document.getElementById('confirmarsenha').value;
        const age = parseInt(document.getElementById('age').value, 10);
        const cpf = document.getElementById('cpf').value;
        const messageDiv = document.getElementById('message');

        // Verifica a idade
        if (age < 18) {
            messageDiv.textContent = 'Você deve ter pelo menos 18 anos para acessar.';
            messageDiv.className = 'error';
            return;
        }

        // Verifica se as senhas coincidem
        if (senha !== confirmarsenha) {
            messageDiv.textContent = 'As senhas não coincidem.';
            messageDiv.className = 'error';
            return;
        }

        // Verifica a senha
        if (!validarsenha(senha)) {
            messageDiv.textContent = 'A senha deve conter pelo menos um número e um caractere especial.';
            messageDiv.className = 'error';
            return;
        }

        // Verifica o CPF
        if (!validateCPF(cpf)) {
            messageDiv.textContent = 'CPF inválido.';
            messageDiv.className = 'error';
            return;
        }

        // Se todas as validações estiverem corretas
        messageDiv.textContent = '';
        messageDiv.className = 'success';
        messageDiv.textContent = 'Formulário enviado com sucesso!';
        setTimeout(() => window.location.href = 'sucesso.html', 2000); // Redireciona após 2 segundos
    });

    // Formata o campo CPF enquanto o usuário digita
    document.getElementById('cpf').addEventListener('input', function() {
        this.value = formatCPF(this.value);
    });

