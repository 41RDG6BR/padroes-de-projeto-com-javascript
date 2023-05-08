// Construção de objetos de documentos

class DocumentBuilder {
    constructor() {
      this.document = {
        header: null,
        body: null,
        footer: null,
      };
    }
    
    withHeader(header) {
      this.document.header = header;
      return this;
    }
    
    withBody(body) {
      this.document.body = body;
      return this;
    }
    
    withFooter(footer) {
      this.document.footer = footer;
      return this;
    }
    
    build() {
      return this.document;
    }
  }
  
  const document = new DocumentBuilder()
    .withHeader('My Document')
    .withBody('This is the body of my document.')
    .withFooter('Page 1 of 1')
    .build();
  