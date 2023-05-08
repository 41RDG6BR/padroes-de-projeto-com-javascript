// Exemplo do padrão Prototype em JavaScript abaixo:

// Classe base para a criação de objetos que serão clonados
class Animal {
  constructor(name, species) {
    this.name = name;
    this.species = species;
  }

  // Método para clonar o objeto
  clone() {
    return Object.create(this);
  }
}

// Criação de um objeto a partir da classe Animal
const dog = new Animal('Max', 'dog');

// Clone do objeto dog
const dogClone = dog.clone();

// Teste de igualdade entre o objeto e seu clone
console.log(dog === dogClone); // false
console.log(dog.name === dogClone.name); // true
console.log(dog.species === dogClone.species); // true

// Neste exemplo, a classe Animal é a classe base para a criação de objetos que serão clonados. O método clone() é implementado na classe base, e retorna uma cópia do objeto usando o método Object.create().

// A partir da classe Animal, é criado um objeto dog com as propriedades name e species. Em seguida, é criado um clone do objeto dog usando o método clone(). Os testes finais verificam que o clone não é exatamente igual ao objeto original, mas tem as mesmas propriedades.