//Instruções para entrega
//desafio classificador de nivel heroi
//o que deve ser utilizdo
//variaveis
//operadores
//laços de repetição
//estruturas de decisões
//objetivoCrie uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói, depois utilize uma estrutura de decisão para apresentar alguma das mensagens abaixo:
//Se XP for menor do que 1.000 = Ferro
//Se XP for entre 1.001 e 2.000 = Bronze
//Se XP for entre 2.001 e 5.000 = Prata
//Se XP for entre 5.001 e 7.000 = Ouro
//Se XP for entre 7.001 e 8.000 = Platina
//Se XP for entre 8.001 e 9.000 = Ascendente
//Se XP for entre 9.001 e 10.000= Imortal
//Se XP for maior ou igual a 10.001 = Radiante
//## Saída
//Ao final deve se exibir uma mensagem:
//O Herói de nome **{nome}** está no nível de **{nivel}**"
console.log("Digite o nome do seu jogador")

let nickname = "Itadori"
let NivelDoPersonagem = "XP1001"
console.log("Bem vindo " + nickname)
const notificacao = "Subiu para: "
//console.log(notificacao + "")
let XP1000 = "FERRO"
let XP1001 = "BRONZE"
let XP2001 = "PRATA"
let XP5001 = "OURO"
let XP7001 = "PLATINA"
let XP8001 = "ASCENDENTE"
let XP9001 = "IMORTAL"
let XP10001 = "RADIANTE"
if(XP1000){console.log(notificacao + XP1000)}
if(XP1001){console.log(notificacao + XP1001)} if(NivelDoPersonagem ===XP2001){ }else if(NivelDoPersonagem <= XP5001){console.log("contiune lutando") }else{ }(NivelDoPersonagem === XP7001)
if(XP2001){console.log(notificacao + XP2001 )}
if(XP5001){console.log(notificacao + XP5001)}
if(XP7001){console.log(notificacao + XP7001 )}
if(XP8001){console.log(notificacao + XP8001 )}
if(XP9001){console.log(notificacao + XP9001 )}
if(XP10001){console.log(notificacao + XP10001)}