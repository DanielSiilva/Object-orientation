// Todos os parametros privados são definidos antes do constructor com o '#' antde do nome, mas junto. 

// Os metodos podem ser definidos junto ao nome mesmo. Pois os metodos, são adionados junto ao nome mesmo. 

class Pessoa {
    //Difinimos metoso privados que são acessado somente na propria classe, ou seja, não pode ser herdado
    #nome ;

     constructor(nome){
        this.#nome = nome
     }
     getNome(){
        return this.#nome.toUpperCase()
     }
}

const nwP = new Pessoa('Daniel')
// So posso acessar o nome atraves do metodo getNome(), fora isso não é possivel acessa nome
//console.log(nwP.getNome());

class PessoaFisica extends Pessoa{
    #CPF

    constructor(nome, CPF){
        super(nome)

        this.#CPF = CPF
    }

    getCpf(){
        return this.#removeCPFPontuacao(this.#CPF)
    }

    #removeCPFPontuacao(CPF){
        //Aqui podemos realizar todo a logica necessaria para a realização do metodo
        return CPF.replaceAll(',', '').replaceAll('-', '').replaceAll('.', '')
    }
}

const npf = new PessoaFisica('Daniel', '000.000,000-32')

console.log(npf.getCpf());



class PessoJuridica extends Pessoa {
    #CNPJ

    constructor (nome, CNPJ){
        super (nome)
        this.#CNPJ = CNPJ
    }

    getCNPJ(){
        return this.#CNPJ
    }
}

class Mei extends PessoJuridica {
    #limit

    constructor(nome, CNPJ){
        super(nome, CNPJ)
        this.#limit = 80_0000
    }

    getLimit(){
        return this.#limit
    }
}


// const nwMei = new Mei('Daniel', '000000')

// console.log(`Meu nome é: ${nwMei.getNome()}`);
// console.log(`Meu cnpj: ${nwMei.getCNPJ()}`);
// console.log(`Meu limite: ${nwMei.getLimit()}`);

