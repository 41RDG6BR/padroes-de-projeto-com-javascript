// Diretório: src/
// Arquivo: main.js

const PersonBuilder = require('./builders/personBuilder');

const person = new PersonBuilder()
  .setName('John Doe')
  .setAge(30)
  .setAddress('123 Main St')
  .build();

console.log(person);
