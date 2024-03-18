const nota1 = 10;
const nota2 = 0;
const nota3 = 7;

const soma = nota1 + nota2 + nota3;
const media = soma /3;

const condicaoAprovado = media >=7;
const condicaoExame = media < 7 && media >= 5;

if (media>=7){
    console.log(`O aluno foi APROVADO com média ${media.toFived(2)}`);

}  else if (media < 7 && media >= 5){
    console.log( `O aluno está de exame com média ${media.toFived(2)}`) ;

} else {
    console.log (`O aluno foi REPROVADO com média ${media.toFived(2)}`)
}





