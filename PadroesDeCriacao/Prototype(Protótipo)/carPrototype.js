// como implementar o padrão de projeto Prototype em JavaScript:

// Exemplo de clonagem de objetos usando Object.create():

const carPrototype = {
  make: '',
  model: '',
  year: '',
  drive() {
    console.log(`Driving a ${this.year} ${this.make} ${this.model}.`);
  }
};

const car1 = Object.create(carPrototype);
car1.make = 'Toyota';
car1.model = 'Camry';
car1.year = 2020;

const car2 = Object.create(carPrototype);
car2.make = 'Honda';
car2.model = 'Accord';
car2.year = 2021;

car1.drive(); // Driving a 2020 Toyota Camry.
car2.drive(); // Driving a 2021 Honda Accord.


// Nesse exemplo, a variável carPrototype é um objeto que define as propriedades e métodos básicos para um carro. 
// Em seguida, usamos o método Object.create() para criar dois objetos car1 e car2 com base no protótipo carPrototype. 
// Depois, definimos as propriedades específicas de cada carro e chamamos o método drive() que foi herdado do protótipo.