function calculadoraDePartidas(nomeHeroi, vitorias, derrotas) {
var saldoVitorias = vitorias - derrotas;
var nivel;
    if (saldoVitorias < 10) {
        nivel = "Ferro";
    } else if (saldoVitorias <= 20) {
        nivel = "Bronze";
    } else if (saldoVitorias <= 50) {
        nivel = "Prata";
    } else if (saldoVitorias <= 80) {
        nivel = "Ouro";
    } else if (saldoVitorias <= 90) {
        nivel = "Diamante";
    } else if (saldoVitorias <= 100) {
        nivel = "Lendário";
    } else {
        nivel = "Imortal";
    }

    return "O Herói " + nomeHeroi + " tem de saldo de " + saldoVitorias + " e está no nível " + nivel;
}

console.log(calculadoraDePartidas("Pedro", 120, 10)); 