//Adcionando um metodo no prototype de um array, todo o array seja ele literal ou instaciado globalmente terá acessa a esse metodo


Array.prototype.multiply = function(){
    return this.map(n => n * 2)
}

const arr = [ 1, 2, 3]