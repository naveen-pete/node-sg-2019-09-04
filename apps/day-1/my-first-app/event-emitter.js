const EventEmitter = require('events');

const emitter = new EventEmitter();
emitter.on('created', function (e) {
  console.log('Created event handled.');
  console.log('Event Args:', e);
});

emitter.on('deleted', function () {
  console.log('Deleted event handled.');
});


emitter.emit('created', 'New product');
emitter.emit('created', { name: 'iPhone', id: 101 });

emitter.emit('deleted');