const resultado = (() => {
  const x = {};
  return {
    a: () => console.log(x),
    b: (key, val) => (x[key] = val),
  };
})();

resultado.a();
resultado.b('cheese', 'cow');
resultado.a();
