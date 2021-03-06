// TODO 20: 在这里写实现代码
import Person from './person';

export default class Teacher extends Person {
  constructor(name, age, klass) {
    super(name, age);
    this.klass = klass;
  }

  introduce() {
    const { klass } = this;
    const personIntroduce = super.introduce();
    const classInroduce = klass === undefined ? 'No Class' : `Class ${klass}`;

    return `${personIntroduce} I am a Teacher. I teach ${classInroduce}.`;
  }
}
