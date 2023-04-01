//This é sempre um valor relativo ao escopo da função ao objeto  em questão 

//Function é um objeto, ou seja, podemos adcionar propriedades atraves da propriedade prototype que vem como objeto padrão vazio em todas as instacias de uma função

// Tudo em javaScript é uma função


function User(name){
    this.name = name
}

User.prototype.getName = function(){
    return this.name
}

const userDaniel = new User('Daniel')

console.log(userDaniel.getName())