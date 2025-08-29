// Comentario
// Javascript é uma linguagem fracamente tipada!
var texto = "Olá"//aspas duplas contém sempre uma string
let texto2 = "Mundo"// Ponto e virgula é opcional
const texto3 = "!"// aspas simples também servem para string

console.log(texto,  texto2 + texto3)
//Virgula concatena com espaço, enquanto o sinal de + deixa tudo junto

texto = "Hello"
let msg = `${texto}, ${texto2} + ${texto3}`
//use crase junto de ${} para concatenar 
// também 
console.log(msg)


// O exemplo acima mostra que é impossivel reatribuir um novo valor a uma constante


let numero = 4
console.log(typeof numero)

let obj = {nome: 'Joao', idade: 37}
console.log(
    "nome da pessoa :", obj.nome,
    "idade do meliante:", obj.idade,
)
console.log(typeof obj)
//Objeto é sempre um elemento chave/valor

let arr = ['Fábio', 'P.', 'R.', 'Silva']
console.log(arr [0], arr[3])
console.log(typeof arr)
