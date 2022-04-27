const module = {
  prop: 'my prop',
  config: {
    language: 'es',
    cache: true,
  },
  setConfig: (confg) => {
    modulo.config = confg;
  },
  isCacheEnable: () => {
    console.log(module.config.cache ? 'si' : 'no');
  },
};
