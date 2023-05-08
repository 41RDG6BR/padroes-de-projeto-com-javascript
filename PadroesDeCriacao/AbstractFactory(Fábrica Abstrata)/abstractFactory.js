// Abstract Factory
class AbstractFactory {
    createProductA() {}
    createProductB() {}
  }
  
  // Concrete Factory 1
  class ConcreteFactory1 extends AbstractFactory {
    createProductA() {
      return new ProductA1();
    }
  
    createProductB() {
      return new ProductB1();
    }
  }
  
  // Concrete Factory 2
  class ConcreteFactory2 extends AbstractFactory {
    createProductA() {
      return new ProductA2();
    }
  
    createProductB() {
      return new ProductB2();
    }
  }
  
  // Abstract Product A
  class AbstractProductA {}
  
  // Concrete Product A1
  class ProductA1 extends AbstractProductA {}
  
  // Concrete Product A2
  class ProductA2 extends AbstractProductA {}
  
  // Abstract Product B
  class AbstractProductB {}
  
  // Concrete Product B1
  class ProductB1 extends AbstractProductB {}
  
  // Concrete Product B2
  class ProductB2 extends AbstractProductB {}
  
  // Client code
  class Client {
    constructor(factory) {
      this.productA = factory.createProductA();
      this.productB = factory.createProductB();
    }
  
    doSomething() {
      console.log(`Product A: ${this.productA.constructor.name}`);
      console.log(`Product B: ${this.productB.constructor.name}`);
    }
  }
  
  // Usage
  const factory1 = new ConcreteFactory1();
  const client1 = new Client(factory1);
  client1.doSomething();
  
  const factory2 = new ConcreteFactory2();
  const client2 = new Client(factory2);
  client2.doSomething();

  
// Nesse exemplo, temos uma classe abstrata AbstractFactory que define a interface para a criação de diferentes tipos de produtos (createProductA e createProductB). Em seguida, temos as classes concretas ConcreteFactory1 e ConcreteFactory2, que implementam a lógica específica para a criação dos produtos.

// Também temos as classes abstratas AbstractProductA e AbstractProductB, que definem a interface para os produtos criados pelas fábricas. Em seguida, temos as classes concretas ProductA1, ProductA2, ProductB1 e ProductB2, que implementam a lógica específica para cada produto.

// Por fim, temos a classe Client, que recebe uma fábrica no construtor e utiliza essa fábrica para criar os produtos específicos (productA e productB). O método doSomething simplesmente imprime o nome do construtor de cada produto.

// No exemplo acima, o Client não sabe qual é a classe concreta que está sendo criada, ele apenas sabe que está trabalhando com produtos abstratos. Isso permite que a lógica de criação dos produtos possa ser alterada sem afetar o código do Client.