//variaveis heroi
let nomeHeroi = "Fantasminha"
let xp = 12004

if (xp < 999 && xp >=1000) {
    console.log(nomeHeroi + " Seu rank é: Iniciante")
} else if (xp >= 1001 && xp <= 2000) {
    console.log(nomeHeroi + " Seu rank é: Bronze")
} else if (xp >= 2001 && xp <= 4000) {
    console.log(nomeHeroi + " Seu rank é: Prata")
} else if (xp >= 4001 && xp <= 7000) {
    console.log(nomeHeroi + " Seu rank é: Ouro")
} else if (xp >= 7001 && xp <= 9000) {
    console.log(nomeHeroi + " Seu rank é: Platina")
} else if (xp >= 9001 && xp <= 10000) {
    console.log(nomeHeroi + " Seu rank é: Diamante")
} else if (xp >= 10000 && xp <= 12000) {
    console.log(nomeHeroi + " Seu rank é: Lendário")
} else if (xp >= 12001) {
    console.log(nomeHeroi + " Seu ranking global é " + xp )
}