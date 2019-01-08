const config = {
  API_PATH: {
    development: 'http://localhost:3000',
    production: '',
  }[process.env.NODE_ENV],
};
