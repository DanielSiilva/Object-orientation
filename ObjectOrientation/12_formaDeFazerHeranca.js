//Instanciando uma função construtora 

function Pessoa(nome) {
    this.nome = nome;
  }

  // Adicionando/modificando o prototype da função Pessoa
  Pessoa.prototype.getNome = function() {
    return this.nome;
  }

  // Usando call para chamar a função e especificar o contexto de 'this'
  function PessoaFisica(nome, cpf) {
    //this pessoa é chamado atraves do call, e passa a fazer parte do contexto da Pessoa fisica
    Pessoa.call(this, nome);
    this.cpf = cpf;
  }
  
  PessoaFisica.prototype = Object.create(Pessoa.prototype);
  PessoaFisica.prototype.constructor = PessoaFisica;
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