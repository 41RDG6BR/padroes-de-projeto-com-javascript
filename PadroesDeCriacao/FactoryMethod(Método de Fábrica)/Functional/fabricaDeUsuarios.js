// Vou mostrar um exemplo simples de uma fábrica de usuários com o padrão Factory Method usando o paradigma funcional em JavaScript.

// Função fábrica de usuários
function createUser(type, name, email) {
    switch(type) {
      case 'admin':
        return createAdminUser(name, email);
      case 'guest':
        return createGuestUser(name, email);
      default:
        throw new Error(`Invalid user type: ${type}`);
    }
  }
  
  // Função fábrica de usuários admin
  function createAdminUser(name, email) {
    const user = { name, email };
    user.admin = true;
    return user;
  }
  
  // Função fábrica de usuários convidados
  function createGuestUser(name, email) {
    const user = { name, email };
    user.admin = false;
    return user;
  }
  
  // Criação de usuários
  const admin = createUser('admin', 'João', 'joao@admin.com');
  const guest = createUser('guest', 'Ana', 'ana@gmail.com');
  
  console.log(admin);
  console.log(guest);
//   Nesse exemplo, usamos funções para criar objetos, em vez de classes. A função createUser() é a função fábrica que recebe um tipo de usuário e retorna uma nova instância do objeto de usuário correspondente. As funções createAdminUser() e createGuestUser() são as funções de criação concretas que criam objetos de usuário do tipo "admin" e "guest", respectivamente.
  
//   Assim como no exemplo da implementação orientada a objetos, o código da fábrica de usuários é separado das implementações concretas de usuário, tornando a lógica mais flexível e facilmente extensível para adicionar novos tipos de usuários.