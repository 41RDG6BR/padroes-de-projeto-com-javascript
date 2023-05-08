// Construção de objetos de menu

class MenuBuilder {
    constructor() {
      this.menu = [];
    }
    
    withOption(label, callback) {
      this.menu.push({ label, callback });
      return this;
    }
    
    build() {
      return this.menu;
    }
  }
  
  const menu = new MenuBuilder()
    .withOption('File', () => console.log('File clicked.'))
    .withOption('Edit', () => console.log('Edit clicked.'))
    .withOption('Help', () => console.log('Help clicked.'))
    .build();
  