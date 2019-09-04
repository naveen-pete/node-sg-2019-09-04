const EventEmitter = require('events');

// const emitter = new EventEmitter();

class Product extends EventEmitter {
  create(product) {
    // code to create a product
    this.emit('created', product);
  }

  delete(id) {
    // code to delete a product
    this.emit('deleted', id);
  }
}

module.exports = Product;