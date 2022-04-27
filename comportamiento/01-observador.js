const user = new User();

const init = () => {
  user.on('login', userLoggeIn);
};

const userLoggeIn = () => {
  // usuario inicio sesion
};

app.init();

// en algun lugar de nuestra app
const login = () => () => {
  // logica de inicio de sesion
  user.trigger('login');
};

login();
