// Função construtora em js

// Uma função construtora  recebe uma palavra variavel chamada this que esbelece/instancia o valor dos argumentos que a função pode receber 

// Podemos instanciar um objeto usando a palavra reservado new nomeFuncao() e passar os argumentos - exemplo:

function User (name, year, CPF) {
    this.name = name ,
    this.year = year ,
    this.CPF = CPF,
    this.payTheBill = function (){
        return 'Boleto pago'
    }
}

//Instanciando um newUser()

const danielUser = new User('Daniel', '22 anos', '102325532')

// Usando a notação de ponto, podemos acessar todos os atribultos desse novo usuario que foi instanciado 

//Em js Tudo é Objeto 
