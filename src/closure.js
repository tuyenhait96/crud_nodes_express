function taikhoan(tiencuatoi) {
  let myMoneny = tiencuatoi;

  return {
    xem: function () {
      return `Bạn có ${myMoneny} trong tai khoan`;
    },
    nap: function (amount) {
      myMoneny = myMoneny + amount;
    },
    rut: function (amount) {
      if (amount > myMoneny) {
        return "Hết tien rồi á";
      }
      myMoneny = myMoneny - amount;
    },
  };
}
const tuyen = taikhoan(20);
console.log(tuyen.xem());
console.log(tuyen.rut(25));
tuyen.rut(5);
console.log(tuyen.xem());
tuyen.rut(5);
