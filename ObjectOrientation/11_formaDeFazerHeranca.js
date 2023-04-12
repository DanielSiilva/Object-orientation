function Pessoa(name){
    this.name = name
}
//Instanciando um metodo diretamente no prototype da Função construtura Pessoa
Pessoa.prototype.getName = function(){
    return this.name;
}

const p = new Pessoa('Daniel')
// console.log(p);

//Instanciando uma nova função construtura
function PessoaFisica(nome, cpf){
    Pessoa.call(this, nome, cpf)
    this.cpf = cpf
}

//Forma errada de definir herança
PessoaFisica.prototype = Pessoa.prototype;

PessoaFisica.prototype.getCPF = function(){
    return this.cpf;
}
// metodo para acessa o prototype
// console.log(Object.getPrototypeOf(p))

const pf = new PessoaFisica('Daniel', '00000056655')
console.log(pf);