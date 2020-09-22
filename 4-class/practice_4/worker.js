// TODO 17: 在这里写实现代码
import Person from './person';

export default class Worker extends Person {
  introduce() {
    const personIntroduce = super.introduce();
    return `${personIntroduce} I am a Worker. I have a job.`;
  }
}
