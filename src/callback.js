function first(callback) {
  setTimeout(() => {
    console.log(1);
    callback();
  }, 100);
}

function sencond() {
  console.log(2);
}

first(sencond);
