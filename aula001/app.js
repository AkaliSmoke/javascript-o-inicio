// Boas práticas
/*
Boas práticas são técnicas, procedimentos ou metodologias comprovadamente eficazes para alcançar um determinado objetivo em uma atividade ou projeto. Elas são identificadas por produzirem resultados consistentes e satisfatórios, sendo adaptáveis e replicáveis em diferentes contextos, visando aprimorar a qualidade, segurança e eficiência. O termo deriva do inglês "best practice" e pode ser aplicado a diversas áreas, como saúde, produção de alimentos, gestão e políticas públicas.
*/
// Case sensitive
/*
Case-sensitive ou case sensitivity são anglicismos para o tipo de análise tipográfica da informática que é capaz de analisar uma cadeia de caracteres, avaliar a existência de caixa alta e caixa baixa e comportar-se de diferentes maneiras em função disso. Ou seja, análise computacional é sensível, faz diferença, se as letras são maiúsculas ou minúsculas.
*/
// Sintaxe básica e comentário
/*
A sintaxe é o conjunto de regras que define a estrutura correta de um código ou frase, enquanto comentários são trechos de texto que são ignorados pelo computador ou navegador. A sintaxe varia conforme a linguagem (ex: var x = 10; em JavaScript ou x = 10 em Python), já os comentários são adicionados usando caracteres específicos, como # para linha única em Python ou // para comentários de linha única em JavaScript. Comentários são usados para explicar o código, tornando-o mais compreensível para humanos, mas não afetam a execução do programa.
*/
// Declaração de variáveis(var, let, const)
/*
var, let e const são palavras-chave para declarar variáveis em JavaScript, diferenciando-se pelo escopo e pela reatribuição. let e const são mais modernas e preferíveis, pois let tem escopo de bloco e pode ser reatribuída, enquanto const tem escopo de bloco e não pode ser reatribuída, sendo ideal para valores fixos. var tem escopo de função e pode gerar problemas de escopo, sendo geralmente evitado em projetos modernos. 
*/
let none = "Kaio";
console.log("olá " + none);
none = "Mascarenhas";
console.log(none);

const idade = 21;
console.log(idade);
// Console e Debug
/*
Console e debug em JavaScript são ferramentas para analisar e corrigir erros (debug) em código, usando o console do navegador como uma interface interativa para inspecionar e executar comandos (como console.log() para exibir informações) e as ferramentas de depuração para encontrar e resolver problemas (bugs) no código. O debug é o processo de encontrar e corrigir problemas no código, e o console é a ferramenta que auxilia nesse processo. 
*/
console.warn("Atenção!")
console.info("Informações")
console.error("Erro!")
//Tipos de dados
/*
número - number
booleano - bool
texto - string
*/
// string
let cidade = "SBO";

// number
let ano = 2024;

// bool
let fumante = false;

console.log("Cidade: " + cidade);
console.log("Ano: " + ano);
console.log("Fumante: " + fumante);
// Operadores
//     Operador Atribuição
/*
Os operadores de atribuição em JavaScript são usados para atribuir valores a variáveis, com o sinal de igual (\(=\)) sendo o operador básico. Existem também operadores combinados, como += (soma e atribui), -= (subtrai e atribui), *= (multiplica e atribui) e /= (divide e atribui), que simplificam a escrita ao executar uma operação e atribuir o resultado à mesma variável em uma única etapa. 
*/
//     Operadores aritméticos
/*
Os operadores aritméticos em JavaScript realizam operações matemáticas em valores numéricos, incluindo adição (\(+\)), subtração (\(-\)), multiplicação (\(*\)), divisão (\(/\)), módulo (\(\%\)) e exponenciação (\(**\)). Eles também incluem operadores unários como incremento (\(++\)) e decremento (\(--\)) para somar ou subtrair um de uma variável, respectivamente. 
*/
//     Operadores relacionais
/*
Os operadores relacionais em JavaScript comparam dois valores e retornam um resultado booleano (true ou false). Os principais operadores são > (maior que), < (menor que), >= (maior ou igual a), <= (menor ou igual a), além dos operadores de igualdade e desigualdade (==, ===, !=, !==), in (verificar propriedade) e instanceof (verificar instância de objeto). 
*/
//     Operadores lógicos
/*
Em JavaScript, os operadores lógicos são usados para combinar expressões booleanas (que resultam em true ou false) e tomar decisões no fluxo do programa.
*/
// Estrutura
//     Estrutura de controle/decisão
/*
As estruturas de controle de decisão em JavaScript são if, else if, else e switch, que permitem que o código tome caminhos diferentes com base em condições. A estrutura if verifica uma condição e executa um bloco de código se ela for verdadeira. O else if é usado para verificar condições adicionais, e o else é usado para um bloco de código a ser executado se nenhuma das condições anteriores for verdadeira. O switch é usado para comparar um valor com várias opções possíveis de forma organizada. 
*/
//     Laços de repetição
/*
Em JavaScript, laços de repetição são usados para executar um bloco de código várias vezes, com os tipos principais sendo for, while e do...while. O for é ideal para um número predefinido de iterações, enquanto o while e o do...while são mais adequados quando o número de repetições depende de uma condição. Outros métodos úteis incluem for...of para iteráveis como arrays e o método forEach() para arrays.
*/
// Arrays --> vetor
/*
Em JavaScript, "array" e "vetor" referem-se à mesma estrutura de dados: uma coleção de valores armazenados em uma única variável. Essa estrutura permite armazenar múltiplos dados (de diferentes tipos) e acessar cada um deles por meio de um índice numérico, que começa em \(0\). 
*/
// Funções personalizadas
/*
Funções personalizadas em JavaScript são blocos de código reutilizáveis que executam tarefas específicas. Você pode criá-las usando declarações de função, expressões de função ou arrow functions. A sintaxe básica envolve usar a palavra-chave function, definir um nome, parênteses () para parâmetros e chaves {} para o corpo da função. As funções podem aceitar argumentos, retornar valores e ajudar a organizar o código, tornando-o mais modular e fácil de manter.
*/