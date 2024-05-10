let aspasSimles = 'Estamos criando uma String com aspas simples'
//String em resumo são Texto que podem ser utilizados no Javascript
//e para utiliza-lo podemos usar com aspas simples,duplas ou string template.

let aspasduplas = "String com aspas duplas";
//Exemplo de string com aspas Duplas.


let templateliteral = `String interpolation allows embedding expressions like ${1+1} `;
//Essa é uma String Template, basicamente usados em casos onde há o necessidade de 
// realizar uma ação aritmética(como exemplo)ou quando guardamos alguma variável dentro dela.
//O símbolo ${}em JavaScript é usapara interpolar variáveis,ou seja para retornar dela.

//Veja abaixo exemplo de como e quando usar as crases
let nome = 'Igor';
let idade =24;//Numero usando aspas (simples ou duplas)
let mensagem = `olá meu nome é ${nome} e tenho ${idade} anos`;
console.log(mensagem);

let primeironome ='Jonh'
let ultimoNome ='Doe'
let nomeCompleto = primeiro nome + '  '+ ultimoNome;//usando o +
let nomeCompletotemplate = '${primeiro nome} ${ultimonome};'//using template literal 
console.log(nomeCompletoTemplate)