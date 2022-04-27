const Users = (() => {
  const recurso = '/users';
  return {
    async listar() {
      return await fetch(recurso).then((res) => res.json());
    },
    async crear(data) {
      return await fetch(recurso, { method: 'POST', body: JSON.stringify(data) }).then((res) => res.json());
    },
  };
})();

resultado.a();
resultado.b('cheese', 'cow');
resultado.a();
