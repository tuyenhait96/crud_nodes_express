const xaycaphe = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("B1: Chuan bi xay ca phe");
    resolve({ cafe: ["a", "b"] }); //dataResolve1
    console.log("B1: DONE");
  }, 2000);
});

xaycaphe
  .then(function vatSua(dataResolve1) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("B2: Lấy sữa + trộn với cà phê");
        resolve({ newData: dataResolve1.cafe[0] + " sữa ông thọ" }); //dataResolve2
        console.log("B2: DONE");
      }, 2000);
    });
  })
  .then(function phaCaphe(dataResolve2) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("B3: Lấy sữa + trộn cà phê + pha cà phê");
        resolve({ result: dataResolve2.newData + " pha ca phe bang phin" }); //phaCapheXong
        console.log("B3: DONE");
      }, 3000);
    });
  })
  .then(function (phaCapheXong) {
    console.log(phaCapheXong);
  });
