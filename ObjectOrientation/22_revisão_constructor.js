class Poligono{
    constructor(comprimento){
        this.comprimento = comprimento;
    }
}


class Quadrado extends Poligono {
    constructor(comprimento) {
      // super chama o construtor da classe pai que vai atribuir comprimento para
      // os atributos comprimento e altura herdados pela nossa classe filha Quadrado
      super(comprimento, comprimento);
      // Nas classes filhas, super() deve ser chamado antes de usar o this. Sem ele
      // vai ocorrer um erro de referência. O this agora se refere a classe filha Quadrado
      this.nome = 'Quadrado';
    }
  
    // os atributos a seguir são herdados da classe pai Poligono: altura, comprimento e area.
  
    get area() {
      return this.altura * this.comprimento;
    }
  
    set area(valor) {
      this.area = valor;
    }
  }
  
const nwQuardrado = new Quadrado(2)
console.log(nwQuardrado);