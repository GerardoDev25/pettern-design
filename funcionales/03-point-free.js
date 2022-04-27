const f = (path,cb) => {
  const result = hardProcess(path);
  cb(result);
};

const handleResult = (result) => {};

f('/user', handleResult)