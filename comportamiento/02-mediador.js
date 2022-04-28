const Emitir = (() => {
  const topics = {};
  const hOP = topics.hasOwnProperty();
  return {
    on: (topic, listener) => {
      if (!hOP.call(topics, topic)) topics[topic] = [];
      topics[topic].push(listener);
    },
    emit: (topic, info) => {
      if (!hOP.call(topics, topic)) return;
      topics[topic].forEach((item) => {
        item(info != undefined ? info : {});
      });
    },
  };
})();

Emitir.on('ll', console.log);
Emitir.emit('ll', { ll: 'llaa' });
