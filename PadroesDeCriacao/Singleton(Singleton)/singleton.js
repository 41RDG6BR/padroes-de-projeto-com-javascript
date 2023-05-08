// O Singleton é um padrão de projeto de criação que tem como objetivo garantir que uma classe tenha apenas uma única instância em todo o sistema, fornecendo um ponto de acesso global a essa instância.

// Ou seja, ele restringe a criação de objetos de uma classe para apenas uma instância e fornece um ponto global de acesso a essa instância única.

// Isso pode ser útil em situações em que precisamos garantir que apenas uma única instância de uma classe seja utilizada, como em um objeto de configuração ou uma conexão com um banco de dados, por exemplo.

// Em JavaScript, podemos implementar o padrão Singleton utilizando uma classe com um método estático que cria a instância única, e uma variável estática para armazenar a instância. Algo como:

class Singleton {
  constructor() {
    if (!Singleton.instance) {
      Singleton.instance = this;
    }
    return Singleton.instance;
  }

  // outros métodos e propriedades aqui
}

const instance1 = new Singleton();
const instance2 = new Singleton();

console.log(instance1 === instance2); // true

// Nesse exemplo, a classe Singleton tem um construtor que verifica se já existe uma instância da classe Singleton criada na variável estática "instance". 
// Se não houver, ele armazena a nova instância nesta variável. Dessa forma, toda vez que um novo objeto da classe Singleton for criado, a mesma instância já existente será retornada.