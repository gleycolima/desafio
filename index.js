let vitorias = 120; // Número de vitórias iniciais
let derrotas = 47; // Número de derrotas iniciais
const resultado = nivelRanqueadas(vitorias, derrotas); // Chamando a função para o estado inicial

// Aqui vem a função que determina o nível de acordo com as vitórias e derrotas
function nivelRanqueadas(vitorias, derrotas) {
    let saldoRanqueadas = vitorias - derrotas; // Calculando o saldo
    let nivel; // Onde guardaremos o nível
    
     // Estrutura condicional para determinar o nível com base no saldo de vitórias
    // Vamos brincar de subir de nível com base no saldo!
    if (saldoRanqueadas < 10) {
        nivel = "Ferro";
    } else if (saldoRanqueadas >= 11 && saldoRanqueadas <= 20) {
        nivel = "Bronze";
    } else if (saldoRanqueadas >= 21 && saldoRanqueadas <= 50) {
        nivel = "Prata";
    } else if (saldoRanqueadas >= 51 && saldoRanqueadas <= 80) {
        nivel = "Ouro";
    } else if (saldoRanqueadas >= 81 && saldoRanqueadas <= 90) {
        nivel = "Diamante";
    } else if (saldoRanqueadas >= 91 && saldoRanqueadas <= 100) {
        nivel = "Lendário";
    } else {
        nivel = "Imortal";
    }

    // Preparando a mensagem sobre o nível alcançado
    return `Com um saldo de ${saldoRanqueadas}, você é ${nivel}!`;
}

// Loop for para simular diferentes cenários de vitórias e derrotas
// Incrementa o número de partidas jogadas a cada iteração
// Vamos agora fazer um teste e ver como nosso herói evolui em suas partidas!
for (let partidasJogadas = 0; partidasJogadas <= 120; partidasJogadas += 20) {
    // Incrementa o número de vitórias e derrotas
    // A cada partida, ele ganha mais algumas vitórias e derrotas, e subimos o nível!
    vitorias += 20;
    derrotas += 10;

    // Chamando a função nivelRanqueadas com o novo saldo
    const resultado = nivelRanqueadas(vitorias, derrotas);

    // Vamos dar uma olhada no que aconteceu...
    console.log(resultado);
}
