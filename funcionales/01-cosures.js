const y = 'lele';
const f = () => {
  const x = 'lala';
  console.log(x, y);
  return () => {
    const z = 'lolo';
    console.log(x, y, z);
  };
};

f()();
console.log(y);
