function tinhtoan(x) {
  return function add(y) {
    console.log(x + y);
  };
}

const add10 = tinhtoan(10); // factory
const add20 = tinhtoan(20); // factory

add10(5);
add10(10);

add20(20);
add20(30);
