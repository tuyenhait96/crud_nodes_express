const p1 = Promise.resolve(100);
const p2 = Promise.resolve(200);
const p3 = Promise.reject("Loi");

const p4 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Day la p4");
  }, 3000);
});

Promise.all([p1, p2, p3, p4])
  .then(function (data) {
    console.log(data);
  })
  .catch(function (err) {
    console.log(err);
  });

// console.log('Synchronous javascript')

// setTimeout(() => {
//    console.log('Timeout 2');
// }, 0);

// Promise.resolve().then(_=>console.log('Promise 3'))
// console.log('Synchronous 4')
