# logica-de-programacao-js
treinando programacao com javascript

## operadores-aritmeticos.js
~~~~js
const numero1 = 40;
const numero2 = 20;
~~~~

A palavra const é utlizada para
~~~~js
console.log(`Os numeros das operacões são ${numero1} e ${numero2} `);
console.log(`A soma dos numeros é ${numero1 + numero2} `);
console.log(`A subtração dos numeros é ${numero1 - numero2}`);
console.log(`A multiplicacao dos ${numero1 * numero2} `);
console.log(`A divisao dos numeros é ${numero1 / numero2} `);
console.log(`O resto dos numeros é ${numero1 % numero2} `);
console.log(`O número elevado a potencia do número2 é ${numero1 ** numaro2}`);

~~~~

## operadores-atribuicao.js

~~~js
let numero = 10;

~~~

Declaramos a variavel `numero` usando a palavra `let` , pois essa variavel será **reatribuida** ao longo do nosso código.

em seguida;fazemos uma série de atribuicao usando os operadores de atribuicao

~~~~js


console.log(`Após atribuir somando o número 10: ${numero +=10}`);
console.log(`Reatribuindo e somando 10: ${numero +=10}`);
console.log(`Reatribuindo e subtraindo 10: ${numero -= 10}`);
console.log(`Reatribuindo e multiplicando 10: ${numero *= 10}`);
console.log(`Reatribuindo e dividindo 10: ${numero /= 10}`);
console.log(`Reatribuindo para o resto da divisao por 10: ${numero %= 10}`);
console.log(`O número final é igual a ${numero }`);
~~~~

Operadores de atribuição:

~~~js
console.log(`Após atribuir somando o número 10: ${numero +=10}`);
console.log(`Reatribuindo e somando 10: ${numero +=10}`);
console.log(`Reatribuindo e subtraindo 10: ${numero -= 10}`);
console.log(`Reatribuindo e multiplicando 10: ${numero *= 10}`);
console.log(`Reatribuindo e dividindo 10: ${numero /= 10}`);
console.log(`Reatribuindo para o resto da divisao por 10: ${numero %= 10}`);
console.log(`O número final é igual a ${numero }`);

~~~

* `+=` ->atribuição com soma 
*`-=` ->atribuição com subtração
*`*=` ->atribuição com multiplicação
*`/=` ->atribuição divisão
*`++` -> atribuiçao com **incremento 1** ( pode ser *pré* ou *pós* incrementado). Ex: `numero ++` (pós-incrementado) ou `++ numero` (pré-incrementado).

*`--` -> atribuição com **decremento 1** (pode ser *pré* ou *pós* decrementado).Ex: `numero ++` (pós-inscrimentado) ou `++ numero` (pré-incrementado).



## operadores-comparacao.js

Neste aquivvo conhecemos os operadores de comparação e a estrutura lógica de decisão **if-else**.

~~~~js
 if (condicao) {
        console.log(`VERDADEIRO`)
    } else {
        console.log(`FALSO`)
    }
    ~~~~

    Esta condicao exibe no console se a condição testada é `true` (verdadeira) ou ``
    const a = 50, b = 50 = `A`;
const condicao = a == b;
~~~~

## Operadores de comparação:

* `==` -> é igual 
* ``