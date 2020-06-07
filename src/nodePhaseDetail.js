const fs = require('fs');
const https = require('https');

console.log('1: \tSTART: HOC CO BAN'); //synchronous code
setTimeout(() => { //Timer
    console.log('2: \tSettimeout 1', 0);
});
setImmediate(()=>{ // checking
    console.log('3: \tsetImmediate');
})

https // I/O => polling using System 
    .get('https://js.edu.vn/wp-json/', res => {
        console.log('4: \tI/O - REQUEST - SYSTEM Polling, Status: ', res.statusCode);
        res.on('data', d => {})
    })
    .on('error', e =>{
        console.error(e)
    })

fs.readFile(__filename, () => { // I/O => polling using THREADPOOL
    setTimeout(() => { //Vong 3
        console.log('5: \tSettimeout trong readFile', 0)   
    });
    setImmediate(() => { //Vong 2
        console.log('6: \tsetImmediate trong readFile')   
    });
    process.nextTick(()=>{ //Vong 2
        console.log('7: \tnextTick trong readFile')   
    })
})

Promise.resolve().then(()=>{ //MiscroTask
    console.log('8: \tPromise main trong MiscroTask')   
    process.nextTick(()=>{ //Vong 2
        console.log('9: \tNextTick trong Promise')   
    })
})

queueMicrotask(()=>{ //MiscroTask
    console.log('10: \tThis is a queueMicrotask')   
})

process.nextTick(()=>{ //MiscroTask
    console.log('11: \tNextTick main thread ')   
})

setTimeout(() => { //Timer
    console.log('12: \ttSettimeout 2', 0)   
});
console.log('13: \t END') //Synchronous code