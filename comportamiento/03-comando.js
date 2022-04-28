const Comander = (() => {
  const o = {
    comprar: (x) => {
      console.log(`Comprado ${x}`);
    },
    vender: (x) => {
      console.log(`Vendido ${x}`);
    },
  };

  return {
    run: (comando, argumento) => {
      if (!o[comando]) {
        console.log('comando no existe');
        return;
      }
      o[comando](argumento);
    },
  };
})();

Comander.run('comprar', 'helado');
Comander.run('lele', 'helado');
