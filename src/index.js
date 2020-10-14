import SortedLinkedList from './common/sortedLinkedList';

function component() {

  let list = new SortedLinkedList();
  list.push(1);
  list.push(2);
  list.push(3);
  list.push(4);
  list.push(5);
  list.push(6);
  list.push(7);
  list.insert("a");
  list.insert("b");
  list.insert("c");
  list.insert("d");
  list.insert("e");
  list.insert("f");

  // list.insert("b", 1);
  // list.insert("g", list.size());

  console.log(list, list.toString())

  const element = document.createElement('div');
  return element;
}

document.body.appendChild(component());