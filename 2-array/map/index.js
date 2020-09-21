export default function numberMapToWord(collection) {
  // TODO 3: 在这里写实现代码
  const transform = new Map();
  transform.set(1, 'a');
  transform.set(2, 'b');
  transform.set(3, 'c');
  transform.set(4, 'd');
  transform.set(5, 'e');
  return collection.map(item => transform.get(item));
}
