'use strict';
let q = require('queues.js');

q.enqueue('a');
q.enqueue('b');
q.enqueue('c');
q.enqueue('d');
q.enqueue('e');

q.dequeue();
q.dequeue();
q.dequeue();
q.dequeue();
q.dequeue();
