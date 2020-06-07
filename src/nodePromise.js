setTimeout(() => {
    console.log('timeout 1');
});

setTimeout(() => {
    console.log('timeout 2');
    process.nextTick(function() {
        console.log('Miscro task - nextTick');
    })
    Promise.resolve().then(()=>{
        console.log('Promise resolve')
    })
    setTimeout(() => {
        console.log('timeout 3');
    });
    setTimeout(() => {
        console.log('timeout 4');
    });

    queueMicrotask(()=>{
        console.log('Day la queueMicrotask')
    })
});