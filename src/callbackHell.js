let square = (a, b, c) => (a + b) * 2;
console.log("Dien tich", square(1, 2, 3));

const add = (a, b, cb) => {
  setTimeout(() => {
    if (typeof a !== "number" || typeof b !== "number") {
      return cb(new Error("Tham so truyen vao sai"));
    }
    cb(undefined, a + b);
  }, 1000);
};

const multiply = (a, b, cb) => {
  setTimeout(() => {
    if (typeof a !== "number" || typeof b !== "number") {
      return cb(new Error("Tham so truyen vao sai"));
    }
    cb(undefined, a * b);
  }, 1000);
};

const devide = (a, b, cb) => {
  setTimeout(() => {
    if (typeof a !== "number" || typeof b !== "number") {
      return cb(new Error("Tham so truyen vao sai"));
    }

    if (b == 0) {
      return cb(new Error("Chia cho 0"));
    }
    cb(undefined, a / b);
  }, 1000);
};

// add(1, 2, (err, data) => {
//   if (err) return console.log("Loi", err);
//   console.log("Ket qua", data);
// });

// call back hell 
let tinhDienTich = (a, b, h, cb) => {
  add(a, b, (err, result) => {
    if (err) return cb(err);
    multiply(result, h, (err, result) => {
      if (err) return cb(err);
      devide(result, 2, (err, resultDT) => {
        if (err) return cb(err.toString());
        cb(undefined, resultDT);
      });
    });
  });
};

// promise lien tiep
// let tinhDienTich = (a, b, c) => {
//   return add(a, b)
//     .then((res) => multiply(res, c))
//     .then((result) => devide(result, 2));
// };
// tinhDienTich(1, 2, 2, (err, data) => {
//   if (err) return console.log("Loi", err);
//   console.log("Ket qua", data);
// });

// let methodPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     // resolve("hahha")
//     reject(new Error("Loi rồi"));
//   }, 1000);
// });

// methodPromise.then(
//   function (data) {
//     console.log("Resolve", data);
//   },
//   function (reject) {
//     console.log("Reject", reject.toString());
//   }
// );

// let add = (a, b) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (typeof a !== "number" || typeof b !== "number") {
//         return reject(new Error("Lỗi rổi"));
//       }
//       resolve(a + b);
//     }, 1000);
//   });
// };

// add(4, "5").then(
//   (data) => {
//     console.log("Add", data);
//   },
//   (err) => {
//     console.log("Err", err + "");
//   }
// );

// (4+5)+6
// add("4", 5)
//   .then(
//     (data) => {
//       return add(data, 6);
//     },
//     (err) => {
//       console.log("Err", err + "");
//     }
//   )
//   .then(
//     (data) => {
//       console.log("Resolve", data);
//     },
//     (err) => {
//       console.log("Err", err + "");
//     }
//   );

// const fs = require("fs");
// let read = (filename) => {
//   return new Promise((resolve, reject) => {
//     fs.readFile(filename, "utf8", (err, data) => {
//       if (err) return reject(err);
//       resolve(data);
//     });
//   });
// };

// read("./b.txt").then(
//   (data) => {
//     console.log("Resolve", data);
//   },
//   (err) => console.log("Reject", err.toString())
// );
