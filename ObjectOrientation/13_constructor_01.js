// Todo prototype de Objeto(), quando instanciado em uma função construtora, tem o metodo constructor.  Quando é chamado, ele procura o constructor mais proximo.

//Definincdo uma função construtora
function Pessoa(nome) {
    this.nome = nome;
  }
  
  // Adicionando o metodo getNome no prototype da função Pessoa
  Pessoa.prototype.getNome = function() {
    return this.nome;
  }
  
  // Instanciando a função Pessoa fisica, que recebe nome, da função Pessoa, sendo chamada atravez do metodo call, recendo o this nome
  function PessoaFisica(nome, cpf) {
    Pessoa.call(this, nome);
    this.cpf = cpf;
  }
  
  //Apontando o prototype de PessoaFisica para o prototype de Pessoa.. Obedecendo a heranco prototipica 
  PessoaFisica.prototype = Object.create(Pessoa.prototype);

  //Redefinimos o constructor de Pessoa fisica , para o Object inicial de Pessoa fissica, tendo a propriedade constructor
  PessoaFisica.prototype.constructor = PessoaFisica;

  //Adcionando o metodo getCPF ao protoype de Pessoa fisica 
  PessoaFisica.prototype.getCPF = function() {
    return this.cpf;
  }
  
  function PessoaJuridica(nome, cnpj) {
    Pessoa.call(this, nome);
    this.cnpj = cnpj;
  }
  
  PessoaJuridica.prototype = Object.create(Pessoa.prototype);

  PessoaJuridica.prototype.constructor = PessoaJuridica;

  PessoaJuridica.prototype.getCNPJ = function() {
    return this.cnpj;
  }
  
  const pj = new PessoaJuridica('JS Raiz', '19301381');
  console.log(pj.getNome())
  console.log(pj.getCNPJ());
  
  function MEI(nome, cnpj) {
    PessoaJuridica.call(this, nome, cnpj);
    this.limit = 80_000;
  }
  
  MEI.prototype = Object.create(PessoaJuridica.prototype);

  MEI.prototype.constructor = MEI;
  
  MEI.prototype.getLimit = function() {
    return this.limit;
  }
  
  const jsRaizMEI = new MEI('JS Raiz', '01309130');
  console.log(jsRaizMEI.getNome(), jsRaizMEI.getCNPJ(), jsRaizMEI.getLimit());
  