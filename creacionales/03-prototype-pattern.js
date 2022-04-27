class MyClass {
  constructor(p1, p2) {
    this.property1 = p1;
    this.property2 = p2;
  }
  method() {
    // i'm a prototipe method
  }
}

const instace = new MyClass(1, 2);

console.log(instace.__proto__);
