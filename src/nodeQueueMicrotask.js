console.log('Dong bô')
queueMicrotask(()=>{
    console.log('queueMicrotask');
})
Promise.resolve().then(()=>{
    console.log('promise')
})