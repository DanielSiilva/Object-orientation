export class Author {
    #id;
    #recipes;
    #userId;
                    
    constructor({ id, recipes = [], userId }) {
      this.#id = id;
      //new set, se houver algum indetificador unico em recipes, será retirad
      this.#recipes = new Set(recipes);
      this.#userId = userId;
    }
  
    get id() {
      return this.#id;
    }
  
    set id(id) {
      this.#id = id;
    }
  
    get recipes() {
      //Convertendo New Set em Array
      return Array.from(this.#recipes.values());
    }
  
    set recipes(recipes) {
      // Convertendo array que está sendo recebido em new Set ;
      this.#recipes = new Set(recipes);
    }
  
    addRecipe(recipe) {
      //Usando o metodo add de new Set, para adicionar uma nova receita ;
      this.#recipes.add(recipe);
    }
  
    removeRecipe(recipe) {
      //Usando o metodo delete de new Set, para remover um receita pelo id ou pela instancia ;
      this.#recipes.delete(recipe);
      this.#recipes.delete(recipe.id);
    }
  
    get userId() {
      return this.#userId;
    }
  
    set userId(userId) {
      this.#userId = userId;
    }
  
    toObject() {
      return {
        id: this.id,
        recipes: this.recipes,
        userId: this.userId
      }
    }
  }
  