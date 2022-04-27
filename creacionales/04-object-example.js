Object.prototype.log = function () {
  console.log(this);
};

const x = { a: 1 };
x.log();

if (!String.prototype.trim2) {
  String.prototype.trim2 = function () {
    try {
      return this.replace(/^\s+|\s+$/g, '');
    } catch (error) {}
  };
}

const y = '      hola   mundo     ';
console.log(y.trim2());
y.log();
