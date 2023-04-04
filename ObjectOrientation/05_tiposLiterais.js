// Em js temos alguns objetos Globais, que no fim são funções construtoras, que herdam do objeto prototype. 

//Sendo uma função construtora, podemos usar os metodos herdados de prototype e acessar . sempre que instanciamos uma novo objeto

//Literal de String

const nameLiteral = 'Daniel'

//Objeto Global de String

const nameGlobal = new String('Daniel')

// console.log(nameLiteral)
// console.log(nameGlobal);

//Objeto Global Array

const numberLiteral = [1, 2, 3, 4, 5]

const numberGlobal = new Array(1, 2, 3, 5)

// console.log(numberLiteral);
// console.log(numberGlobal);


//Objetos globais são classe construtoras (funçoes construtoras ), que instanciam um novo objeto global do seu tipo. Se String, Number, Array ou qualquer outro

//Ex: verificando se o parametro passado é um array

// function numberArray (arrayNumber){
//     if(Array.from(arrayNumber)){
//         return arrayNumber.map((item) => item * 2)
//     }else{
//        return 'Você precisa passar um array';
//     }
// }

// const array = [1, 2, 3]

// console.log(numberArray(Array.from(1)))