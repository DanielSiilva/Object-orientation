//Na programação orientada a objetos, uma classe é um modelo de código de programa extensível para criar objetos, fornecendo valores iniciais para estado (variáveis ​​de membro) e implementações de comportamento (funções ou métodos de membro).

// Class são chamadas de açucar sintatico. Pois no fim, ainda estamos trabalhando com objeto e função construtoras. 

//Por exemplo,  o codigo abaixo, pode ser reescrito de de acordo com o codigo logo, abaixo dele.

class User {
    constructor(name){ 
        this.name = name; 
    }
}
// proof: User is a function
//console.log(typeof User);

//Reescrevendo uma classe
//Para adicionar um novo metodo ao prototipo dessa função, usamos
function User1(name){
    this.name = name
}
//Adicionando um novo metodo
User1.prototype.getNome = function(){
    this.name
}


//Detalhes: Class é um função que reconhece a palavra reservada constructor que recebe ás proriedades da Class, todo o codigo é imediatamente invocado quando a Class, é instanciada

class Person {
    constructor(name, year){
        //Quando instanciado o this é acionado a um objeto vazio, que é modificado quando a class é instanciada
        
        this.name = name;
        this.year = year
    }

    getName(){
        return this.name
    }

    getYear(){
        return this.year
    }
}

const DanielPerson = new Person('Daniel', 22)

console.log(`Meu nome é ${DanielPerson.getName()} e tenho ${DanielPerson.getYear()} anos`);

