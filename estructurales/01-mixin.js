const mixin = {
  saludar() {
    console.log(`hola ${this.nombre}`);
  },
  despedir() {
    console.log(`adios ${this.nombre}`);
  },
};

class Usuario {
  constructor(nombre) {
    this.nombre = nombre;
  }
}

Object.assign(Usuario.prototype, mixin);

const usuario = new Usuario('asdasda')

usuario.saludar()