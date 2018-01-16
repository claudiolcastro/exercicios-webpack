const product = {
  name: 'Car Ford Mustang',
  price: 25000,
  descount: 3500
};

function clone(obj) {
  return { ...obj };
}

const newProduct = clone(product);
newProduct.name = 'Car Ford Ranger';

console.log(product, newProduct);