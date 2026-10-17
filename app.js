const anoAtual = 2026;

const codigosSazonais = {
    "Festival26": { 
        status: "ativo", 
        premio: "Ingresso" 
    }
};

function resgatarCodigoSecreto(codigoUsuario, anoTentativa) {
    if (anoTentativa !== anoAtual) {
        return "❌ ERRO: Temporada antiga. Código expirado!";
    }

    if (codigosSazonais[codigoUsuario]) {
        const cupom = codigosSazonais[codigoUsuario];
        return `🎉 SUCESSO! Você ganhou: ${cupom.premio}`;
    } else {
        return "❌ ERRO: Código secreto inválido.";
    }
}

// FUNCTION 2: Lógica do Desconto de Aniversário Escalonável
function calcularDescontoAniversario(quantidadeConvidados) {
    let descontoBase = 10; // Desconto mínimo garantido de 10%
    let descontoFinal = descontoBase + (quantidadeConvidados * 5); // +5% por convidado

    if (descontoFinal > 50) {
        descontoFinal = 50; // Trava de segurança para o restaurante não ter prejuízo
    }

    return `🎂 Cupom de Aniversário Ativado! Você trouxe ${quantidadeConvidados} convidados e ganhou ${descontoFinal}% de desconto.`;
}

// Banco de dados temporário dos enigmas ativos por restaurante
const enigmaDoDia = {
    pergunta: "Sou o coração da Zona Leste, nasci nos trilhos e tenho o sangue alvinegro. Quem sou eu?",
    respostaCorreta: "Itaquera"
};

// FUNCTION 3: Lógica do Enigma Interativo com Funcionários
function validarEnigmaPresencial(respostaUsuario) {
    const respostaLimpa = respostaUsuario.trim().toLowerCase();

    if (respostaLimpa === enigmaDoDia.respostaCorreta) {
        return "🎖️ PARABÉNS! Resposta correta. O funcionário liberou o seu Broche/Badge físico de presença!";
    } else {
        return "❌ Resposta incorreta. Tente decifrar o enigma novamente ou peça uma pista para a equipe!";
    }
}

// ==========================================
// TESTES DO SUPER APP (RODAR NO CONSOLE)
// ==========================================

console.log("--- TESTE 1: CÓDIGOS SECRETOS ---");
console.log(resgatarCodigoSecreto("Festival26", 2026)); // Sucesso
console.log(resgatarCodigoSecreto("Festival26", 2025)); // Expirado

console.log("\n--- TESTE 2: DESCONTO ANIVERSÁRIO ---");
console.log(calcularDescontoAniversario(4));  // 4 convidados = 30% desconto
console.log(calcularDescontoAniversario(12)); // 12 convidados = Trava no teto de 50%

console.log("\n--- TESTE 3: ENIGMA PRESENCIAL ---");
console.log(validarEnigmaPresencial("itakera")); // Acertou a charada
console.log(validarEnigmaPresencial("centro"));  // Errou a charada
