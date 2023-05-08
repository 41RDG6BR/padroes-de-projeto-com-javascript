// Construção de objetos de formulários

class FormBuilder {
    constructor() {
      this.form = {};
    }
    
    withTextField(name, label) {
      this.form[name] = { type: 'text', label };
      return this;
    }
    
    withSelectField(name, label, options) {
      this.form[name] = { type: 'select', label, options };
      return this;
    }
    
    build() {
      return this.form;
    }
  }
  
  const form = new FormBuilder()
    .withTextField('name', 'Name')
    .withSelectField('gender', 'Gender', ['Male', 'Female'])
    .withTextField('email', 'Email')
    .build();
  