// Construção de objetos de configuração

class AppConfigBuilder {
    constructor() {
      this.config = {
        apiEndpoint: null,
        apiKey: null,
        loggingEnabled: false,
        theme: 'default',
      };
    }
    
    withApiEndpoint(apiEndpoint) {
      this.config.apiEndpoint = apiEndpoint;
      return this;
    }
    
    withApiKey(apiKey) {
      this.config.apiKey = apiKey;
      return this;
    }
    
    withLoggingEnabled(loggingEnabled) {
      this.config.loggingEnabled = loggingEnabled;
      return this;
    }
    
    withTheme(theme) {
      this.config.theme = theme;
      return this;
    }
    
    build() {
      return this.config;
    }
  }
  
  const appConfig = new AppConfigBuilder()
    .withApiEndpoint('https://api.example.com')
    .withApiKey('abc123')
    .withLoggingEnabled(true)
    .withTheme('dark')
    .build();
  