// TODO 15: 在这里写实现代码
export default class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  introduce() {
    const { name, age } = this;
    return `My name is ${name}. I am ${age} years old.`;
  }
}
