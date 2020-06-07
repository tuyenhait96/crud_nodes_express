function getPromise(flag) {
  const result = new Promise((resolve, reject) => {
    if (flag) {
      resolve(10);
    } else {
      reject("loi");
    }
  });
  return result;
}

getPromise(true)
  .then(function (data) {
    console.log("Then true: thanh cong", data);
    return getPromise(true);
  })
  .then(function (data2) {
    console.log("Then2", data2);
  })
  .catch(function (err) {
    console.log("Catch true: That bai", err);
  });

getPromise(false)
  .then(function (data) {
    console.log("Then false: thanh cong", data);
  })
  .catch(function (err) {
    console.log("Catch false: that bai", err);
  });

setTimeout(() => {
  console.log("settimeout");
}, 0);

console.log("code sync");
