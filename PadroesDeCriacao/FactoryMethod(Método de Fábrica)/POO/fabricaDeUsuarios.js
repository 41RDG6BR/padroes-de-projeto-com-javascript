// Vou mostrar um exemplo simples de uma fábrica de usuários com o padrão Factory Method usando o paradigma OO em JavaScript.

// Classe de usuário base
class User {
    constructor(name, email) {
      this.name = name;
      this.email = email;
    }
  }
  
  // Fábrica de usuários
  class UserFactory {
    static createUser(type, name, email) {
      switch(type) {
        case 'admin':
          return new AdminUser(name, email);
        case 'guest':
          return new GuestUser(name, email);
        default:
          throw new Error(`Invalid user type: ${type}`);
      }
    }
  }
  
  // Classe de usuário admin
  class AdminUser extends User {
    constructor(name, email) {
      super(name, email);
      this.admin = true;
    }
  }
  
  // Classe de usuário convidado
  class GuestUser extends User {
    constructor(name, email) {
      super(name, email);
      this.admin = false;
    }
  }
  
  // Criação de usuários
  const admin = UserFactory.createUser('admin', 'João', 'joao@admin.com');
  const guest = UserFactory.createUser('guest', 'Ana', 'ana@gmail.com');
  
  console.log(admin);
  console.log(guest);
  
//   Nesse exemplo, a classe User é a classe base para todos os tipos de usuários. A classe AdminUser e GuestUser estendem a classe User. A classe UserFactory é responsável por criar os diferentes tipos de usuários, dependendo do tipo passado como parâmetro na chamada do método createUser().
  
//   Por exemplo, ao passar o parâmetro 'admin', a fábrica retorna uma instância da classe AdminUser, e ao passar o parâmetro 'guest', a fábrica retorna uma instância da classe GuestUser.
  
//   O método createUser() da classe UserFactory é um exemplo de Factory Method, pois ele é responsável por criar objetos de diferentes tipos, mas a decisão de qual tipo criar é delegada para subclasses.