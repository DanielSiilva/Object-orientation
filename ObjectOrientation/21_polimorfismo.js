// Metodos com o mesmo nome podemm ter comportamentos diferente ;
// Quando pretendo sobrescrever um metodo ;

//1° Podemos simplesmente reescrever o metodo na class que está herdando para termos o polimorfismo, ou seja, apenas 'copiar' o nome e relizar a imprementação pertinente a class. Por exemplo:

// 2° Segunda forma de fazer polimorfismo - invocado atraves do super, o metodo que desejo usar adicionando ou modificando a logica

class PessoaJuridica {
    #CNPJ;
    constructor(nome, CNPJ) {
      this.#CNPJ = CNPJ;
      this.nome = nome
    }
    
    get CNPJ() {
      return this.#CNPJ
    }
    
    set CNPJ(CNPJ) {
      this.#CNPJ = CNPJ;
    }
    
    calculaImposto(valor) {
      return 0.15 * valor;
    }
  }
  
  class MEI extends PessoaJuridica {
    #limite;
    constructor(nome, cnpj) {
      super(nome, cnpj);
      this.#limite = 80_000;
    }
    
    get limite() {
      return this.#limite;
    }
    
    set limite(limite) {
      this.#limite = limite;
    }
    
    calculaImposto(valor) {
        // Segunda forma de fazer polimorfismo - invocado atraves do super, o metodo que desejo usar adicionando ou modificando a logica
      return super.calculaImposto(valor) - 150;
    }
  }