'use strict';
const LL = require('../../../data-structures-and-algorithms/code-challenges/401/linkedList/linked-list.js');


function printList(list) {
  let current = list.head;
  
  while(current) {
    console.log(current);
    current = current.next;
  }
}
let list = new LL.LinkedList();
list.append(1);
list.append(2);
list.append(3);

printList(list);