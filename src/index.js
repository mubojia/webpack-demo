import HashTable from './common/DataListClass/hashTable/hashTable';

function component() {
  const hash = new HashTable();
  hash.put("mubojia", "A.com");
  hash.put("zhanglichang", "B.com");
  hash.put("liudan", "C.com");
  hash.put("chenghao", "D.com");
  
  console.log(hash);

  const element = document.createElement('div');
  return element;
}

document.body.appendChild(component());