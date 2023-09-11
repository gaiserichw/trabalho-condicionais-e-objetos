//gustavo P
//1.
 // A) ele identifica se alice é maior de 18

// B) quando o numero da idade for menor (<) sera impresso que nao pode dirigir
// se o numero for maior(>)sera impresso que pode dirigir.

// 2.
/* A) o objetivo do codigo é verificar se o leão é carnivoro ou nao
   B)''Leão é um animal carnivoro''


3.
   A) ele verifica se o numero é maior que 5 e se é par
   B) o numero é maior que 5
   o numero é par

   4.
   exercicios de escrita de codigo

   */
   /*
function recebetextonumero(nome, idade){
    if (idade >= 18){
        return nome + 'voce é maior de idade';

    } else 
    return nome + 'voce é menor de idade';

}
console.log(recebetextonumero(prompt('qual seu nome?'), Number(prompt('qual sua idade?'))));
*/ 
/*
function turnousuario(turno){
    if (turno === 'm'){
        return 'bom dia';

    }
    else if(turno === 'T'){
        return 'boa tarde';
    }
    else if (turno === 'n'){
        return 'boa noite';
    }
}
console.log(turnousuario(prompt(qual turno você trabalha? m = matutino, T = tarde, N = noite)));

*/
/*
let turnos = matutino;
switch(turnos){
    case 'm':
        console.log('bom dia')
        break
        case 'tarde':
            console.log('boa tarde');
            break
            case 'noite ':
                console.log('boa noite')
                
                break
                default:
                    return 'turno nao encontrado';
}
const aluno = {
    nome: prompt('qual seu nome?),
    idade : Number(prompt(qual sua idade?)),
    tipodecurso :boolean (prompt('qual seu curso?(true/false:')),
    tembolsa :boolean (prompt(você tem bolsa?))
}
function candidatar(aluno)
if (aluno.idade < 30){
    if(aluno.tipodecurso === true){
        if(aluno.tembolsa === false){

        }

    } 
    return 'voce pode se canditar a uma bolsa!'
    else{
        return 'desculpe,voce nao atende aos requisitos'
    }
}
console.log(candidatar(aluno));
*/
const produto = {
    nome = 'bolsa',
    preco : 200,
    desconto : 10,
    fretegratis :true
}
function precofinal(produto){
    let precocomdesconto = (produto.preco -((produto.preco * produto.desconto)/100));
    if(produto.fretegratis){
        if(produto.desconto < o){
            return precocomdesconto + frete
        }
    }
}
/*  function soma(a,b){
return a+b;
} 
function divisão(a,b){
return a/b 
}
function multiplicação(a,b){
 return a*b
  
}
function subtração(a,b){
 return a-b
}

let n = Number (prompt('digite um numero'));
let n1 = Number (prompt("digite outro numero"));
console.log(soma(n, n1));
console.log(divisão(n, n1));
console.log(subtração(n, n1));
console.log(multiplicação(n, n1));
*/
/*
function checkPalindrome(texto){
    let reverter = texto.split("").reverse().join("")
    return texto === reverter
  }
  
  
  console.log(checkPalindrome("reviver"));
  
  console.log(checkPalindrome("luz azul"));
  
  console.log(checkPalindrome("manhã"));
  /*
