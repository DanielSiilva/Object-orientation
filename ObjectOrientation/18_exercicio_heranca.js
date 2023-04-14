// Pessoa

class Pessoa {
    constructor (nome){
        this.nome = nome;
    }

    getName(){
        return this.nome;
    }
}

//Pessoal fisica

class PessoaFisica  extends Pessoa{

    constructor(nome, CPF){
        super(nome)
        this.CPF = CPF
    }

    getCPF(){
        return this.CPF
    }
}

// Pessoa juridica

class PessoaJuridica extends Pessoa {
    constructor(nome, CNPJ){
        super(nome)

        this.CNPJ = CNPJ
    }

    getCNPJ(){
        return this.CNPJ
    }
}

// Mei

class Mei  extends PessoaJuridica{
    constructor(nome, CNPJ){
        super(nome, CNPJ)

        this.limit = 8_000
    }

    getLimit(){
        return this.limit
    }

}

const m = new Mei('Daniel', '0000')

console.log(` meu cnpj: ${m.getCNPJ()}`);
console.log(` meu nome: ${m.getName()}`);


