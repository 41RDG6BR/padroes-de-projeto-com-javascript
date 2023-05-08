// Diretório: builders/
// Arquivo: personBuilder.js

class PersonBuilder {
    constructor() {
      this.person = {};
    }
    
    setName(name) {
      this.person.name = name;
      return this;
    }
    
    setAge(age) {
      this.person.age = age;
      return this;
    }
    
    setAddress(address) {
      this.person.address = address;
      return this;
    }
    
    build() {
      return this.person;
    }
  }
  
  module.exports = PersonBuilder;
  