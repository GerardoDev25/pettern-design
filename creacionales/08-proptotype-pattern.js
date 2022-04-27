const dog = {
  raza: 'sdasdas',
  talk: function () {
    console.log(`guau, i'm a ${this.raza}`);
  },
};

const kiltro = Object.create(dog);

kiltro.talk();
console.log(dog.hasOwnProperty('raza'));
