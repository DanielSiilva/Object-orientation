

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

console.log(pf.name);
