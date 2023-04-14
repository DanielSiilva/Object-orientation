class Person {
    constructor (name){
        this.name = name
    }

    // Como se estivesse adicionando o metodo no prototype de Person
    getName(){
        return this.name
    }
}

const p = new Person('Daniel')

console.log(p.getName());

// Herdar os metodos e parametros de outra class . Podemos fazer assim:

                 //Palavra reservada que herda as caracterisiticas de Person
class PersonLegal extends Person {
    constructor (name, CPF){
        
        //Invoca o constructor de Person = > tudo que está dendo de person em name, será executado
        super (name)

        this.CPF = CPF
    }

    getCPF(){
        return this.CPF
    }
}

const pf = new PersonLegal('Marlene', '000.000.000-23')

console.log(pf);


// Na forma antiga teriamos 
// Criar uma função construtora, e apontar o prototype de um para a outra. 
// Realizando assim  a heranca prototipica 


function Person1 (name){
    this.name = name
}

Person1.prototype.getName = function(){
    return this.name
}

const newPerson1 = new Person1('Daniel')

console.log(newPerson1);

function PersonLegal1 (name, cpf){
    this.name = name
    this.cpf = cpf
}

newPerson1.prototype = Object.create(PersonLegal1.prototype)


