const start = Date.now()
const fs = require('fs');

function thoiGian(bandau) {
    return Date.now() - bandau;
}
// 0s
// setTimeout(() => {
//     const lag = thoiGian(start)
//     console.log(`Timer:\tSettimeout thứ nhất - 0 giây:\tThời gian chạy:\t${lag}ms`);
            
// }, 0);
//tăng giây
setTimeout(() => {
    const lag = thoiGian(start)
    console.log(`Timer:\tSettimeout thứ nhất - 0 giây:\tThời gian chạy:\t${lag}ms`);
            
}, 150);
fs.readFile(__filename, () => {
    console.log('I/O callback: ' + __filename);
})
setImmediate(function() {
    const lag = thoiGian(start)
    console.log(`Check:\tsetImmediate:\tThời gian chạy:\t${lag}ms`);
})
// readfile này nó không trả ra result nhanh mà cần tốn thời gian chạy