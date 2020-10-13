import LinkedList from './common/linkedList';

function component() {

  let list = new LinkedList();
  list.push(1);
  list.push(2);
  list.push(3);
  list.push(4);
  list.push(5);
  list.push(6);
  list.push(7);
  console.log(list.head);
  console.log(list.removeAt(1), list.head);
  console.log(list)

  const element = document.createElement('div');
  return element;
}

document.body.appendChild(component());