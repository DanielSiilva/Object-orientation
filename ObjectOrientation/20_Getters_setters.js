

class Person {
    #name
    #year
    constructor(name, year){
        this.#name = name;
        this.#year = year
    }

    // metodo que retorna => busca o parametro desejado
    get name (){
        return this.#name
    }

    // Metodo que 'salvar' os novos valores para o parametro desejado
    get year (){
        return this.#year
    }

    set name (name){
        return this.#name = name
    }

    set year (year){
        return this.#year = year
    }

    
}

// Podemos acessar os metodos com notação de ponto, ou seja estamos invocando o metodo em questão

const p = new Person('Daniel', '19')

// console.log(p.name);
// Aqui estamos atribuído um novo valor atraves da função set Name, um novo nome para this.#name . Podemos fazer para os demais parametros
p.name = 'Marlene'
// console.log(p.name);


class PesssoaFisica extends Person{
    #CPF

    constructor(name, cpf){
        super (name)
        this.#CPF = cpf
    }

    get cpf(){
        return this.#CPF
    }
}

const pf = new PesssoaFisica("Daniel", '0225454564')

//--------------------------------------------------------



//console.log(pf.name);
const arr1 = [1, 1, 2]
const arr2 = [2, 2,3]

function arrayDiff(a, b) {
    return a.filter(val => !b.includes(val))
}

// console.log(arrayDiff(arr1, arr2));

// -------------------------------

// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

function createPhoneNumber(numbers){
    let format = "(xxx) xxx-xxxx";
    
    for(let i = 0; i < numbers.length; i++){
      format = format.replace('x', numbers[i]);
    }
    return format;
  }

console.log(createPhoneNumber(numbers));