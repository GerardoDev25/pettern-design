const https = require('https');

const get = (url = '') =>
  new Promise((resolve, reject) => {
    const comp = url.split('/');
    const host = comp.shift();

    const optios = {
      hostname: host,
      path: '/' + comp.join('/'),
      method: 'GET',
    };

    const req = https.request(optios, (res) => {
      res.setEncoding('utf-8');
      let body = '';
      res.on('data', (d) => {
        body += d;
      });

      res.on('end', (d) => {
        const parsed = JSON.parse(body);
        resolve(parsed);
      });
    });

    req.on('error', (e) => {
      console.log(e);
      reject(e);
    });

    req.end();
  });

const main = async () => {
  const result = await get('jsonplaceholder.typicode.com/users');
  console.log(result);
};

main();
