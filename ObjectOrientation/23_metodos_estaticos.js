// Metodos estaticos não são acessados quando o objeto é instanciado ;
// Métodos estáticos não são chamados na instâncias da classe. Em vez disso, eles são chamados na própria classe. Geralmente, são funções utilitárias, como funções para criar ou clonar objetos.

// Quando instanciamos um nova classe, o this recebe um objeto fazio, e na medida que os argumentos/parametros são passados, o this terá o seu valor mudado, porém, como o metodo estatico, esse valor não será mudado, ou seja, não entra no this.

// Podemos ter esse metodo estatico, para usarmos de forma generica, em qualquer parte do codigo, sem ter a necessidade de instancia uma nova class;

//

// Palavra reservada static

class Pessoa {
    #nome;
      constructor(nome) {
          this.#nome = nome;
      }
  
      get nome() {
        return this.#nome.toUpperCase();
    }
    
    set nome(nome) {
      this.#nome = nome;
    }
  }
  
class PessoaFisica extends Pessoa {
    #CPF;
    static CPF_TOTAL = 11;

    constructor(nome, CPF) {
      super(nome);
      this.#CPF = PessoaFisica.removeCPFPontuacao(CPF);
    }
    
    get CPF() {
      return this.#CPF;
    }
    
    set CPF(CPF) {
      this.#CPF = PessoaFisica.removeCPFPontuacao(CPF);
    }
    
    static removeCPFPontuacao(CPF) {
      return CPF.replaceAll('.', '').replaceAll('-', '');
    }
    
    // Podemos chamar outro metodo estatico, se o mesmo, faz parte da mesma class
    static validaCPF(CPF) {
      return this.removeCPFPontuacao(CPF).length === 11;
    }
}
  
  const pf = new PessoaFisica('Ayrton', '123.456.789-10');
  
  console.log(pf.CPF);
  
  console.log(pf);
  
  console.log('cpf', PessoaFisica.removeCPFPontuacao('000.000.000-00'))
  console.log('cpf', PessoaFisica.removeCPFPontuacao('100.000.000-00'))
  console.log('cpf', PessoaFisica.removeCPFPontuacao('200.000.000-00'))
  console.log('cpf', PessoaFisica.removeCPFPontuacao('300.000.000-00'))
  
  console.log(PessoaFisica.validaCPF('000.000.000-00'))
  
  console.log(PessoaFisica.CPF_TOTAL)