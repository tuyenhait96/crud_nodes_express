// promise trong TH này tốn chỉ 3s

// Đẵng lẽ p2, p3 chạy trước nhưng do ta dùng promise nên nó vẫn đảm bảo thứ tự chạy ta muốn

const p1 = new Promise((resolve, reject) =>{
    setTimeout(function() {
        resolve('Day la p1')
    }, 3000)
})

const p2 = new Promise((resolve, reject) =>{
    setTimeout(function() {
        resolve('Day la p2')
    }, 2000)
})

const p3 = new Promise((resolve, reject) =>{
    setTimeout(function() {
        resolve('Day la p3')
    }, 1000)
})

p1.then(function(data) {
    console.log(data)
    return p2;
})

.then(function(data) {
    console.log(data)
    return p3;
})

.then(function(data) {
    console.log(data)
})