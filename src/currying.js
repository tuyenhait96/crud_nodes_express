// preload factory

function sum(a,b,c){
    console.log(a+b+c);
}
sum(1,2,3)

function suma(a){
    return function sumb(b){
        return function sumc(c){
            console.log(a+b+c);
            
        }
    }
}
suma(1)(2)(3)