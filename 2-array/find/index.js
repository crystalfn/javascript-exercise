export default function find00OldPerson(collection) {
  // TODO 4: 在这里写实现代码
  const birthYear = new Date().getFullYear();
  return collection.find(item => birthYear - item.age > 2000).name;
}
