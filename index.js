let meuHeroi = "coconauta"
let xp = 8000
let defaultRank = "iniciante";

switch (xp) {
    case 1000:
        console.log("Seu rank é: iniciante")
        break;

        case 2000:
            console.log("Seu rank é: bronze")
            break;
        case 5000:
            console.log("Seu rank é: prata")
            break;
        case 7000:
            console.log("Seu rank é: ouro")
            break;
        case 8000:
            console.log(meuHeroi + " Seu rank é: platina")
            break;
        case 9000:
            console.log("Seu rank é: diamante")
            break;
        case 10000:
            console.log("Seu rank é: lendário")
            break;
            default:
            console.log("Você não possui um rank")
            break;
}
