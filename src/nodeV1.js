const start = Date.now()
const fs = require('fs');

function thoiGian(bandau) {
    return Date.now() - bandau;
}

fs.readFile(__filename, () => {
    setTimeout(() => {
        const lag = thoiGian(start)
        console.log(`Timer:\tSettimeout thứ nhất - 0 giây:\tThời gian chạy:\t${lag}ms`);
                
    }, 0);

    setTimeout(() => {
        const lag = thoiGian(start)
        console.log(`Timer:\tSettimeout thứ hai - 0 giây:\tThời gian chạy:\t${lag}ms`);
    }, 0);

    setImmediate(function() {
        const lag = thoiGian(start)
        console.log(`Check:\tsetImmediate:\tThời gian chạy:\t${lag}ms`);
    })

    console.log('Filename: ' + __filename);
})
console.log('Đây là hàm sync code');
