const users = [
  { age: 17, name: 'name1', lastName: 'lastName1' },
  { age: 18, name: 'name2', lastName: 'lastName2' },
  { age: 12, name: 'name3', lastName: 'lastName3' },
  { age: 1, name: 'name4', lastName: 'lastName4' },
];

// const getFirstChild = (data = []) => {
//   const children = data.filter((x) => x.age < 2);
//   const firstChild = children[0];
//   const child = {
//     fullName: `${firstChild.name} ${firstChild.lastName}`,
//     age: firstChild.age,
//   };
//   return `${child.fullName} is ${child.age} older year`;
// };

// console.log(getFirstChild(users));

const compose =
  (...fns) =>
  (x) =>
    fns.reduceRight((y, f) => f(y), x);

const pipe =
  (...fns) =>
  (x) =>
    fns.reduce((y, f) => f(y), x);

const isMinor = (x) => x.age > 2;
const filter = (fn) => (xs) => xs.filter(fn);
const getFirstElement = (xs) => xs[0];
const formatObject = (x) => ({ fullName: `${x.name} ${x.lastName}`, age: x.age });
const format = (x) => `${x.fullName} is ${x.age} older year`;

const getFirstChildCompose = compose(format, formatObject, getFirstElement, filter(isMinor));
const getFirstChildPipe = pipe(filter(isMinor), getFirstElement, formatObject, format);

// console.log(getFirstChildCompose(users));
console.log(getFirstChildPipe(users));
