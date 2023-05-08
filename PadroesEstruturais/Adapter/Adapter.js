// Interface esperada pelo cliente
class Target {
    request() {
      return "Target: O objeto padrão que espera por uma solicitação.";
    }
  }
  
  // Adaptee: o objeto que precisa ser adaptado
  class Adaptee {
    specificRequest() {
      return ".eetpadA laicpA eht fo roivaheb laicepS";
    }
  }
  
  // Adapter: adapta a interface do Adaptee para a interface esperada pelo cliente
  class Adapter extends Target {
    constructor(adaptee) {
      super();
      this.adaptee = adaptee;
    }
  
    request() {
      const specificRequest = this.adaptee.specificRequest().split("").reverse().join("");
      return `Adapter: (TRADUZIDO) ${specificRequest}`;
    }
  }
  
  // Código do cliente
  function clientCode(target) {
    console.log(target.request());
  }
  
  // Usando o Adaptee original
  console.log("Cliente: Eu não entendo o Adaptee original:");
  const adaptee = new Adaptee();
  console.log(`Adaptee: ${adaptee.specificRequest()}`);
  
  // Usando o Adapter
  console.log("\nCliente: Mas eu posso trabalhar com ele através do Adapter:");
  const adapter = new Adapter(adaptee);
  clientCode(adapter);
  