class Macbook {
  precio() {
    return 1000;
  }
}

const memoria = (mac) => {
  const v = mac.precio();
  mac.precio = function () {
    return v + 100;
  };
};

const macbook = new Macbook();
memoria(macbook);

console.log(macbook.precio());
