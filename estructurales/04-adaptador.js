class Api {
  constructor() {
    this.operators = function (url, ops, verb) {
      switch (varb) {
        case 'get':
          break;
        case 'post':
          break;

        default:
          break;
      }
    };
  }
}

class Api2 {
  constructor() {
    this.get = function (url, post) {};
    this.post = function (url, post) {};
  }
}

class ApiAdapter {
  constructor() {
    const api2 = new Api2();

    this.operators = function (url, ops, verb) {
      switch (varb) {
        case 'get':
          return api2.get(url, ops);
        case 'post':
          return api2.post(url, ops);

        default:
          break;
      }
    };
  }
}

const api = new Api();
api.operators('www.google.com', { q: 1 }, 'get');

const api2 = new Api2();
api2.get('www.google.com', { q: 1 });

const adapter = new ApiAdapter();
adapter.operators('www.google.com', { q: 1 }, 'get');
